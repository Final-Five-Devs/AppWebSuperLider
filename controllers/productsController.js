const producto= require("../models/inventario")

// GET--> nmostrar todos los productos

exports.getProducts=async(req,res) =>{

    const productos = await producto.find();
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}

// GET---> Mostar un producto por ID

exports.getProductById=async(req,res)=>{

    const product =await producto.findById(req.params.id)
    
    if(!product){
        return res.status(404).json({
            success:false,
            message:"Producto no encontrado"
        })
    }
    res.status(200).json({
        success:true,
        product
    })

}

// PUT---> Update un producto

exports.updateProduct=async(req,res) =>{

    let product =await producto.findById(req.params.id)
    
    if(!product){
        return res.status(404).json({
            success:false,
            message:"Producto no encontrado"
        })
    }

    product = await producto.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators:true
    })

    res.status(200).json({
        success:true,
        message:"producto actualizado correctamente",
        product
    })

}

// DELETE --> eliminar un producto por ID

exports.deleteProduct=async(req,res) =>{

    const product =await producto.findById(req.params.id)
    
    if(!product){
        return res.status(404).json({
            success:false,
            message:"Producto no encontrado"
        })
    }

    await product.remove();
    res.status(200).json({
        success:true,
        message: "Producto eliminado correctamente"
    })

}
// POST --> Crear nuevo producto

exports.newProduct=async(req,res) =>{
    const product=await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}
