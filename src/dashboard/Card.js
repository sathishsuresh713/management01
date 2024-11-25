import React from "react";

function Card() {
  const cardcontent=[
    {
      title:"Earnings Monthly",
      value:"$40,000",
      color:"primary"
    },
    {
      title:"Earnings Yearly",
      value:"$215000",
      color:"success"
    },
    {
      title:"Tasks",
      value:"50%",
      color:"info"
    },
    {
      title:"Pending",
      value:"18",
      color:"warning"
    }
  ]
  return (
    <div className="container">
      <div className="row">
        {
          cardcontent.map((list)=>{
            return <div className="col-3 my-3 ">
            <div class="card" style={{ width: "18rem;" }}>
              <div class={`card-body border-start border-${list.color} border-3 rounded-start`}>
                <h5 class={`card-title text-${list.color}`}>{list.title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{list.value}</h6>
              </div>
            </div>
          </div>
          })
        }
        
      </div>
    </div>
  );
}

export default Card;
