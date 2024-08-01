const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const multer = require('multer');
const category = multer({dest:'uploads/category/'})

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"freshcart"
})

app.get("/",(req,res)=>{
    const sql = "SELECT * FROM users";
    db.query(sql,(err,data)=>{
        if(err) return res.json("error");
        return res.json(data);
    })
})

app.post("/Addusers",function(req, res){
    const value =[
        req.body.name,
        req.body.username,
        req.body.email,
        req.body.password,
    ]
    const sql = `INSERT INTO users (name, username, email, password) VALUES ("${value[0]}","${value[1]}","${value[2]}","${value[3]}")`;
    db.query(sql,(err,data)=>{
        if(err) return console.log(err);
        return res.json("done");
    })
})

app.post("/Login",(req,res)=>{
    const value=[
        req.body.email,
        req.body.password,
    ]
    const sql = `SELECT * FROM users WHERE email = "${value[0]}" AND password = "${value[1]}"`
    db.query(sql,(err,data)=>{
        if(err) return console.log(err);
        return res.json(data);
    });
})

app.get("/categories",(req,res)=>{
    const sql = "SELECT * FROM categories";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
        else return res.json(data);
    });
})
app.get("/SubCategories",(req,res)=>{
    const sql = "SELECT * FROM sub_category";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
        else return res.json(data);
    });
})

app.get("/SubCategories",(req,res)=>{
    const sql = "SELECT * FROM sub_category";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
        else return res.json(data);
    });
})

app.post("/Addproducts",function(req,res){
    const value = [
        req.body.name,
        req.body.weight,
        req.body.category,
        req.body.subCategory,
        req.body.original_price,
        req.body.selling_price,
        req.body.status,
        req.body.metaTitle,
        req.body.metaDesc,
        req.body.image
    ]
    let query = `INSERT INTO products (product_name, weight, category_id, subcategory_id, original_price, selling_price, status, metaData, metaDesc, image) VALUES ('${value[0]}','${value[1]}','${value[2]}','${value[3]}','${value[4]}','${value[5]}','${value[6]}','${value[7]}','${value[8]}','${value[9]}')`;

    db.query(query,(err,data)=>{
        if(err) return console.log(err);
        return res.json("added");
    });
})

// app.post("/Addcategory",upload.single('image'),function(req, res){}
app.post("/Addcategory",function(req, res){
    const value =[
        req.body.name,
        req.body.visible,
        req.body.metaTitle,
        req.body.metaDesc
    ]
    const sql = "INSERT INTO categories (cate_name, status, `meta title`,`meta description`) VALUES ('"+value[0]+"','"+value[1]+"','"+value[2]+"','"+value[3]+"')";
    db.query(sql,(err,data)=>{
        if(err) return console.log(err);
        return res.json("done");
    })
})

app.post("/AddSubCategory",function(req, res){
    const value =[
        req.body.name,  
        req.body.visible,
    ]
    console.log(value);
    const sql = `INSERT INTO sub_category (subCate_name, status) VALUES ('${value[0]}','${value[1]}')`;
    console.log(sql);
    db.query(sql,(err,data)=>{
        if(err) return res.json("err");
        return res.json("done");
    })
})

app.get("/products",(req, res)=>{
    let sql = "SELECT * FROM products INNER JOIN categories ON products.category_id = categories.category_id INNER JOIN sub_category ON products.subcategory_id = sub_category.subCategory_id;";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/AddCart",(req,res)=>{
    let sql
    if(req.body.quantity){
        const value =[
            req.body.user_id,
            req.body.pro_id,
            req.body.quantity
        ]
        sql = `INSERT INTO cart (user_id , product_id, quantity) VALUES(${value[0]},${value[1]},${value[2]})`;
    }else{
        const value =[
            req.body.user_id,
            req.body.pro_id
        ]
        sql = `INSERT INTO cart (user_id , product_id) VALUES(${value[0]},${value[1]})`;
    }
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json("ok");
    })
})

app.get("/democ",(req,res)=>{
    value = req.query.id;
    let sql = `SELECT * FROM products INNER JOIN categories on categories.category_id = products.category_id WHERE product_id = ${value}`;
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);
    })
})

app.post("/fetchCart",(req,res)=>{
    value = req.body.id;
    let sql = `SELECT * FROM cart INNER JOIN products ON cart.product_id = products.product_id WHERE user_id = ${value};`;
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    }) 
})
app.post("/deleteCart",(req,res)=>{
    value = req.body.pro_id;
    let sql = `DELETE FROM cart WHERE id = ${value}`;
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    }) 
})

app.post("/count",(req,res)=>{
    let value = [
        req.body.id,
        req.body.table,
        req.body.uid
    ]
    let sql = `SELECT COUNT(${value[0]}) from ${value[1]} WHERE user_id = ${value[2]} `;
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    }) 
})

app.post("/wish",(req,res)=>{
    let value = [
        req.body.uid,
        req.body.pro_id
    ]
    let sql = `INSERT INTO wishlists(user_id, product_id) VALUES (${value[0]},${value[1]})`
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json("ok");
    })
})

app.post("/saveCart",(req,res)=>{
    let value = req.body
    value.map((v,k)=>{
        if(v != null){
            let sql = `UPDATE cart SET quantity = ${v} WHERE id = ${k}`
            db.query(sql,(err,data)=>{
                if(err) return res.json(err);
                return res.json("ok");
            })
        }
    })
})

app.post("/find",(req,res)=>{
    let value = req.body.input
    let sql = `SELECT * FROM products INNER JOIN categories ON products.category_id = categories.category_id INNER JOIN sub_category ON sub_category.subCategory_id = products.subcategory_id WHERE product_name LIKE "%${value}%" OR subCate_name LIKE "%${value}%"OR cate_name LIKE "%${value}%"`
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/wishlist",(req,res)=>{
    let value = req.body.id
    let sql = `SELECT * FROM wishlists INNER JOIN products ON products.product_id = wishlists.product_id WHERE user_id = ${value}`
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log("Server listening");
})