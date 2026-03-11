function openModal(id){
  document.getElementById(id).style.display='block';
}

function closeModal(id){
  document.getElementById(id).style.display='none';
}

// Close modal on outside click
window.onclick = function(event){
  if(event.target.className === 'modal'){
    event.target.style.display='none';
  }
}