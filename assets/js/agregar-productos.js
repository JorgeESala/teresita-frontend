const PRODUCTS_API = "localhost:8080/api/products";
const IMGUR_API = "https://api.imgur.com/3/image";


document.getElementById("newItemForm").addEventListener('submit', async (event) => {
    event.preventDefault();
    // Obtener los valores del formulario
    const newItemName = document.getElementById("newItemName").value;
    const newItemDescription = document.getElementById("newItemDescription").value;
    const newItemImage = document.getElementById("newItemImage").files[0];
    const newItemPrice = document.getElementById("newItemPrice").value;
    const newItemQuantity = document.getElementById("newItemQuantity").value;
    const newItemCategory = document.getElementById("newItemCategory").value;
    console.log(newItemImage);
    
    // Imgur post format
    const newImgurImg = new FormData();
    newImgurImg.append("image", newItemImage);
    newImgurImg.append("type", "image");
    newImgurImg.append("title", newItemName);
    newImgurImg.append("description", newItemDescription);

    const imgurResponse = await fetch(IMGUR_API, {
        method: 'POST',
        headers: {
            'Authorization': "Client-ID e1506383382c3d0"
        },
        body: newImgurImg
    })
    const imgurData = await imgurResponse.json();
    const imgurLink = imgurData;

    console.log(imgurLink);
    // Crear un objeto de publicación y agregarlo al array
    const newItem = {
        name: newItemName,
        description: newItemDescription,
        img: imgurLink,
        price: newItemPrice,
        quantity: newItemQuantity,
        category: newItemCategory
    };



    // Limpiar formulario
    document.getElementById("newItemForm").reset();

});
