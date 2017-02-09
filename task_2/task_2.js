/*Задача 2:
На странице ссылка. 
По клику на ссылку следует отобразить попап 100px*200px в центре экрана, поверх текста, затеняя остальную часть. 
На попапе кнопка OK, клик на которую закрывает попап.
Использовать чистый js.*/

// get object with two methods in popUp
var popUp = (function(){
	
	var showPopUp = function(){
		document.getElementById('popup').className += " shown"; 
		document.getElementById('win-shadow').className += " window-shadow"; 	
		document.getElementById('popup-container').className += " container-absolute"; 	

	};

	var hidePopUp = function(){
		document.getElementById('popup').className = " popup-body"; 
		document.getElementById('win-shadow').className = " "; 
		document.getElementById('popup-container').className = " "; 	
	}
	
	return { hidePopUp: hidePopUp, showPopUp: showPopUp }
})();

