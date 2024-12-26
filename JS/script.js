function stars() {
    Swal.fire({
        title: "Yeyyy! :D",
        text: "You succesfully touched the stars!",
        padding: "3em",
        color: "#716add",
        draggable: true,
        backdrop: `
          rgba(0,0,123,0.4)
          url("/img/nyan-cat.gif")
          left top
          no-repeat
        `
      });
};

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('contactIcon').addEventListener('mouseenter',()=>{
        Swal.fire({
            icon: "info",
            title: "Click the icons to get in touch",
            confirmButtonText: "Great",
        });
    });
});