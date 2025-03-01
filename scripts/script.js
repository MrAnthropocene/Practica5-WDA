document.addEventListener("DOMContentLoaded",()=>{
    //all the code will be here
        const itemInput = document.getElementById("bookItem");
        const authorInput = document.getElementById("authorItem");
        const priceInput = document.getElementById("priceItem");
        const addItemBtn = document.getElementById("purchaseBtn");
        const shoppingList = document.getElementById("shoppingList");
    
        let items = [
            {image: "https://m.media-amazon.com/images/I/71bwYpbwv1L.jpg",name:"Flowers in the Attic",author:"Author: ",addAuthor: "Virginia Cleo Andrews",price:"Price:",addprice:"280",purchased:false},
        ];//array to store items
        
    
        function renderList(){
            shoppingList.innerHTML="";//clear the UI before rendering
            //update the list display
            items.forEach((item,index)=>{
                const li = document.createElement("li");
            //li.className="theClass";
                li.innerHTML=`
                <span>${item.name}</span>
                <br>
                <div class ="imgBook-container">
                <img src="${item.image}">
                </div>
                <div class = "bookInfo-container">
                <span>${item.author}</span>
                <span>${item.addAuthor}</span>
                <br>
                <span>${item.price}</span>
                <span>${item.addprice}</span>
                </div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick = "deleteItem(${index})">❌</button>
                `;
    
                shoppingList.appendChild(li);
            });
        
        }
        //function to delete an item
        window.deleteItem = (deleteIndex)=>{
            //console.log("Deleting index "+ deleteIndex);
            items.splice(deleteIndex,1); //remove from the array
            renderList(); //update the list
            console.log(items);
        }
        // Function to edit an item
    window.editTask = (editIndex) => {
        const li = shoppingList.children[editIndex];
        const item = items[editIndex];
        
        // Replace the span with an input field
        li.innerHTML = `
            <input type="text" id="edittitleInput${editIndex}" value="${item.name}">
            <input type="text" id="editauthorInput${editIndex}" value="${item.addAuthor}">
            <input type="text" id="editpriceInput${editIndex}" value="${item.addprice}">
            <button onclick="saveEdit(${editIndex})">Add</button>
            <button onclick="imageEdit(${editIndex})">Image</button>
            <button onclick="cancelEdit(${editIndex})">Cancel</button>
        `;
    }
    window.imageEdit = (editIndex) => {
        const newImg = prompt("Please enter new image url: ");
        if (newImg !== null && newImg.trim() !== "") {
            items[editIndex].image = newImg.trim();
            renderList();
        }
    }
         // Function to save the edited item
        window.saveEdit = (editIndex) => {
            const changeTitleinput = document.getElementById(`edittitleInput${editIndex}`);
            const changeAuthorinput = document.getElementById(`editauthorInput${editIndex}`);
            const changePriceinput = document.getElementById(`editpriceInput${editIndex}`);
            const newName = changeTitleinput.value.trim();
            const newAuthor = changeAuthorinput.value.trim();
            const newPrice = changePriceinput.value.trim();
            
            if (newName === ""||newAuthor === ""||newPrice === "") {
                alert("Items info cannot be empty");
                return;
            }
    
            items[editIndex].name = newName;
            items[editIndex].addAuthor = newAuthor;
            items[editIndex].addprice = newPrice;
            renderList();
        }
        window.cancelEdit = (editIndex) => {
            renderList();
        }
        addItemBtn.addEventListener("click",()=>{
            let itemText = itemInput.value;
            let authorText = authorInput.value;
            let priceText = priceInput.value;
            //for registering items
            if(itemText == ""|| authorText == ""||priceText == ""){
                alert("Item cannot be empty");
                return;
            }
            
            items.push({image: " ",name:itemText,author:"Author: ",addAuthor:authorText,price:"Price: ",addprice:priceText,purchase:false}); //creating obj lit and pushing it to the array
            
            renderList();
    
        });
        renderList();
    });
    