/* Objeto de Datos */
var datos = {
	fun: [],
	xi:  [],
	fi:  [],
	tam: {n:3,m:3}
};
/* Inicializar Eventos */
initialEvents();

/* Funciones */
function init(){
	/* Obteniendo matriz Xo */
	var initialVar = document.forms.initialVar.children;
	[].forEach.call(initialVar,function(i,index){
		datos.xi[index] = parseFloat(i.children[1].value);
	});
	/* Obteniendo matriz de funciones */
	var initialFun = document.forms.initialFun.children;
	[].forEach.call(initialFun,function(i,index){
		datos.fun[index] = eval('('+i.children[1].value+')');
	});
	/* Resolver las funciones con los valores iniciales Matriz Fo*/
	
	datos.xi.forEach(function(i,index){
		datos.fi[index] = datos.fun[index].apply(this,datos.xi);
	});
}

function initialEvents(){
	$('#btnCalcular').click(function(){
		init();
	});
}