let initProductList=[
    {
        img: "https://www.cricketwireless.com/uiassets/DAPW4055-detail-front.jpg",
        name: "Iphone 1",
        description: "this is iphone 1",
        price: 140

    },
    {
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795416637",
        name: "Iphone 2",
        description: "this is iphone 2",
        price: 150

    },
    {
        img: "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg",
        name: "Iphone 3",
        description: "this is iphone 3",
        price: 160

    }
]

const showProductList= (state = initProductList, action) => {
    switch(action.type){
        case 'SHOW_PRODUCT_LIST':
            return state;
        default: 
            return state;
    }
}

export default showProductList;