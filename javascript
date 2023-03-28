<!DOCTYPE html>
<html>
    <body>
        <div id=""button-container"></div>
        <button>
            onclick="myFunction(e)">VOTE</button>
        <script>
            function myFunction(e){
                for (let i=0;i<e; i++){
                    let newBtn=document.createElement('button');
                    newBtn.innerText="Click me";
                    document.querySelecctor('#button-container').apendChild(newBtn);
                }
            }
        </script>
    </body>
</html>