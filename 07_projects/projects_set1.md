# Projects Related to DOM

## Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Back-Ground-Color Changer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header id="heading"><b>BackGround Color Changer</b></header>

    <main id = "color_boxes">
        <div class="button yellow"></div>
        <div class="button red"></div>
        <div class="button green"></div>
        <div class="button blue"></div>
        <div class="button white"></div>
    </main>
    <h3>Click on the buttons to change to the whole page background color</h3>
    <script src="script.js"></script>
</body>
</html>

```
```Css
body{
    position: relative;
    text-align: center;
}

.yellow{
    height: 50px;
    width: 50px;
    border: solid;
    margin: 1px;
    background-color: yellow;
}
.red{
    height: 50px;
    width: 50px;
    border: solid;
    margin: 1px;
    background-color: red;
}
.green{
    height: 50px;
    width: 50px;
    border: solid;
    margin: 1px;
    background-color: green;
}
.blue{
    height: 50px;
    width: 50px;
    border: solid;
    margin: 1px;
    background-color: blue;
}
.white{
    height: 50px;
    width: 50px;
    border: solid;
    margin: 1px;
    background-color: white;
}

#color_boxes{
    display: flex;
    justify-content: center;
    margin-top: 100px;
    
}


```

``` Javascript

const buttons=document.querySelectorAll('.button')
// console.log(buttons)

const body = document.querySelector('body')

buttons.forEach( function(button){
    // console.log(button);
    button.addEventListener('click', function (color_button) {
        // console.log(color_button);
        const color = color_button.target.classList[1]

        body.style.backgroundColor=color;
        
    })
    
})


```