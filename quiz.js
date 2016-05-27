



var treeObject = {
	height: null,
	character: null
};


function tree(treeObj){
	var print = "";
	treeObj.height++;
for(i=0; i<treeObj.height;i++){
	for(v=i;v<=treeObj.height;v++){
			print += " ";
		}
	for(w=0; w<i*2-1; w++){
		
	print += treeObj.character;
}
	
	print += "\n";
}
console.log(print);
}

