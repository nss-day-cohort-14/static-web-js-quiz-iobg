var charBox= document.getElementById("character");
var heightBox=document.getElementById("height");
var growBtn= document.getElementById("grow");


growBtn.addEventListener("click", function(){
	tree(treeObject);
});
heightBox.addEventListener("keyup", function(){
	treeObject.height = parseInt(heightBox.value)+1 ;
	if(event.code==="Enter"){
		tree(treeObject);
	}
});
charBox.addEventListener("keyup", function(){
	treeObject.character = charBox.value;
	if(event.code==="Enter"){
		tree(treeObject);
	}
});


var treeObject = {
	height: "",
	character: ""
};


function tree(treeObj){
	if(treeObj.height === "" || treeObj.character === ""){
		alert("Both fields must have a value!");
	}
	else{
	var print = "";
		for(var i=0; i<treeObj.height;i++){
			
			for( var v=i;v<=treeObj.height;v++){
			print += " ";}

			for(var w=0; w<i*2-1; w++){
			print += treeObj.character;}
	
		print += "\n";}
	console.log(print);}	
}	


