function mapersonne(){
var mypersonid=$("#rumeur_personne_id").length > 0 ? $("#rumeur_personne_id").val() : $("#hack_personne_id").val();
var text=$("#rumeur_personne_id").length > 0 ? $("#rumeur_text").val() : $("#hack_text").val();
$.ajax({
url: "/personne/"+mypersonid,
success:function(data){
var personne=data.personne;
$("#blah").html("<img src=\""+personne.pic+"\" class=\"picperson\" alt=\""+personne.name+"\" /><div class=\"hackertext\">"+text+"</div>");

}
});
}
function monlieu(){
var lieuid=$("#rumeur_lieu_id").length > 0 ? $("#rumeur_lieu_id").val() : $("#hack_lieu_id").val();
var text=$("#rumeur_personne_id").length > 0 ? $("#rumeur_text").val() : $("#hack_text").val();
$.ajax({
url: "/lieu/"+lieuid,
success:function(data){
$("#blah")[0].style.backgroundImage=(data.lieu.pic);
$("#blah")[0].style.backgroundRepeat="no-repeat";
$("#blah")[0].style.backgroundSize="100% 100%";
}
});
}

$(function(){
$(".meschaussures").click(function(){
$.ajax({url:$(this)[0].dataset.url,success:function(data){$('#overlay').html(data);$('#overlay')[0].style.display='block';
if ($("#personne_photo").length > 0 || $("#lieu_photo").length > 0){
var fileElem=$("#personne_photo").length > 0 ? personne_photo : lieu_photo;
fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "<p>Aucun fichier sélectionné !</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.height = 60;
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      };
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = `${this.files[i].name} : ${this.files[i].size} octets`;
      li.appendChild(info);
    }
  }
}
}


}});
});
});
