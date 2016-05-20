
$(document).ready(function(){
	var fileArr;
	$('#relation').click(relation);
	$('#file').change(fileChange);


	
	
	
	
	
	
});
var arr = new Array();	
/* function KitemSet(k){
	this.k = k ; 
	this.support = new Array();
	this.confidence = new Array();
	this.countSup = function(k,arr,minSup){
		var sup = new Array();
		for(var i ; i<arr.length;i++){
			for(var j ; j<arr[0].length;j++){
					sup[j]+=arr[i][j]; 
				
			}
			
		}
		
	}
	
	
} */


function relation(){	
	var minSup = 0.3 ; 
	var supDic = {};
	var sup = new Array();
	for(var j =0 ; j<arr[0].length ; j++){
		sup[j]=0;
	}
		
	for(var i=1 ; i<arr.length;i++){
		for(var j=0 ; j<arr[0].length;j++){				
			sup[j]+=arr[i][j]; 				
		}			
			
	}
	for(var j =0 ; j<arr[0].length ; j++){
		sup[j]=Math.round(sup[j]/arr.length*100)/100;
		if (sup[j]>=minSup) {
			supDic[String(j)]=sup[j]
			
		}
	}
	var a =Object.keys(supDic)
	document.getElementById('fileContent').value =a[1] ;		
}
	

function fileChange(e){

	file = this.files[0];	
	fileReader = new FileReader();
		fileReader.readAsText(file);
		
	fileReader.onload = function(){
		
		var rawInput =  fileReader.result;
		var line = rawInput.split('\n');
		var index ;		
		for (var i =0 ; i<line.length ; i++){		
			arr[i]= line[i].split(/,(?=[\w|\u4e00-\u9fa5])/g);			
		}
		for(var i=1 ; i<arr.length ; i++){
			for(var j =0 ; j<arr[i].length ; j++){
				arr[i][j]=parseInt(arr[i][j]);
			}
		}		
}
}