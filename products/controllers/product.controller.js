'use strict'

const productModel = require('../models/product.model');


exports.getAllProducts = (request,response)=>{
    console.log('received getAllProducts request');

    productModel.getProducts().then((products,error)=>{

        if(error){
            throw error.message;
        }

        if(products){
            return response.status(200).send(products);
        }else{
            return response.status(204);
        }


    }).catch(error=>{
        throw error.message;
    })

}


exports.addProduct = (request,response)=>{
    console.log('received addProduct request');
    productModel.addProduct(request.body.info).then((product,error)=>{

        if(error){
            throw error.message;
        }

        if(product){
            return response.status(200).send({info:true});
        }else{
            console.error('error adding product');
            return response.status(500);
        }
    }).catch(error=>{
        throw error.message;
    })
}




exports.deleteProduct = (request,response)=>{
    console.log('received deleteProduct request');

    productModel.deleteProduct(request.params.id).then((product,error)=>{

        if(error){
            throw error.message;
        }

        if(product){
            return response.status(200).send({info:true});
        }else{
            console.error('error on deleteProduct');
            return response.status(500);
        }
    }).catch(error=>{
        throw error.message;
    })
}





