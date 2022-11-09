const ventas= require("../models/ventas")

// GET--> nmostrar todos los productos

exports.getSales=async(req,res) =>{

    const sales = await ventas.find();
    res.status(200).json({
        success:true,
        cantidad: ventas.length,
        sales
    })
}

// GET---> Mostar un producto por ID

exports.getSalesById=async(req,res)=>{

    const sales =await ventas.findById(req.params.id)
    
    if(!sales){
        return res.status(404).json({
            success:false,
            message:"Producto no encontrado"
        })
    }
    res.status(200).json({
        success:true,
        sales
    })

}

// PUT---> Update un producto

exports.updateSales=async(req,res) =>{

    let sales =await ventas.findById(req.params.id)
    
    if(!sales){
        return res.status(404).json({
            success:false,
            message:"Producto no encontrado"
        })
    }

    sales = await ventas.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators:true
    })

    res.status(200).json({
        success:true,
        message:"producto actualizado correctamente",
        sales
    })

}

// DELETE --> eliminar un producto por ID

exports.deleteSales=async(req,res) =>{

    const sales =await ventas.findById(req.params.id)
    
    if(!sales){
        return res.status(404).json({
            success:false,
            message:"Producto no encontrado"
        })
    }

    await sales.remove();
    res.status(200).json({
        success:true,
        message: "Producto eliminado correctamente"
    })

}
// POST --> Crear nuevo producto

exports.newSales=async(req,res) =>{
    const sales=await ventas.create(req.body);

    res.status(201).json({
        success:true,
        sales
    })
}
