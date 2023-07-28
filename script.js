var res = fetch("https://kontests.net/api/v1/all");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length; i++){
        console.log(data1[i].name);
        var div = document.createElement("div");
        div.innerHTML=  `
      <div class="card">
  <h5 class="card-header">Name: ${data1[i].name}</h5>
  <div class="card-body">
    <h5 class="card-title">Start-Time:  ${data1[i].start_time}</h5>
  
    <h5 class="card-text">End-time:  ${data1[i].end_time}.</h5>
    <h5 class="card-title">Duration:  ${data1[i].duration}</h5>
    <h5 class="card-title">Site:  ${data1[i].site}</h5>
    <h5 class="card-title">Status:  ${data1[i].status}</h5>
    <p><a href="#" class="pe-auto">URL:${data1[i].url}</a></p>
    
  </div>
</div>`
      document.body.append(div);
    
    }
    
});

      
