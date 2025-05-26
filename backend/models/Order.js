module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
   shipperName:{
        type:DataTypes.STRING,
        allowNull:false,
   },
    shipperNumber:{
          type:DataTypes.STRING,
          allowNull:false,
    
    },
    shipperAddress:{
          type:DataTypes.STRING,
          allowNull:false,
    
    },
    shipperCountry:{
          type:DataTypes.STRING,
          allowNull:false,
    
    },
    shipperCity:{
          type:DataTypes.STRING,
          allowNull:true,
    
    },
    shipperEmail:{
          type:DataTypes.STRING,
          allowNull:true,
    
    },
    shipperPostalCode:{
          type:DataTypes.STRING,
          allowNull:true,
    
    },
    shipperState:{
          type:DataTypes.STRING,
          allowNull:true,
    
    },
    receiverName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    receiverNumber:{
          type:DataTypes.STRING,
          allowNull:false,
    
    },
    receiverAddress:{
          type:DataTypes.STRING,
          allowNull:false,
    
    },
    receiverCountry:{
          type:DataTypes.STRING,
          allowNull:false,
    
    },
    receiverEmail:{
          type:DataTypes.STRING,
          allowNull:true,
    
    },
    quantity:{
          type:DataTypes.INTEGER,
          allowNull:true,
    
    },
    weight:{
          type:DataTypes.INTEGER,
          allowNull:true,
    
    },
    height:{
          type:DataTypes.INTEGER,
          allowNull:true,
    
    },
    width:{
          type:DataTypes.INTEGER,
          allowNull:true,
    
    },
    length:{
          type:DataTypes.INTEGER,
          allowNull:true,
    
    },
    trackingId:{
          type:DataTypes.STRING,
          allowNull:false,
    
    },
    description:{
          type:DataTypes.STRING,
          allowNull:false,
    
    },
    orderStatus:{
          type:DataTypes.STRING,
          allowNull:false,
          defaultValue:"In-progress"
    
    },
    paymentMode:{
          type:DataTypes.STRING,
          allowNull:false,
    
    },
    updatedBy:{
          type:DataTypes.STRING,
          allowNull:false,
          defaultValue:"emeraldexpress.org"
    
    },
    mode:{
          type:DataTypes.STRING,
          allowNull:false,

    },
    stage:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0
    },
    destination:{
      type:DataTypes.STRING,
      allowNull:true
    },
    pickUpDate:{
      type:DataTypes.STRING,

    },
    pickupTime:{
     type: DataTypes.STRING,
     allowNull:true
    },
    totalFreight:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
   carrier:{
      type: DataTypes.STRING,
      allowNull: true 
   },
   comment:{
     type: DataTypes.INTEGER,
      allowNull: true  
   },
   expectedDeliveryDate:{
      type: DataTypes.STRING,
      allowNull: true  
   }

});
  
    return Order
  };