import React from "react";
import "./pricing.css";

function Pricing() {
  const pricingcontent = [
    {
      head: "Free",
      price: "$0",
      user: "Single User",
      storage: "5GB Storage",
      publicprojects: "Unlimited Public Projects",
      access: "Community Access",
      privateprojects: "Unlimited private projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      reports: "Monthly Status Reports"
    },
    {
      head: "Plus",
      price: "$9",
      user: "5 Users",
      storage: "50GB Storage",
      publicprojects: "Unlimited Public Projects",
      access: "Community Access",
      privateprojects: "Unlimited private projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      reports: "Monthly Status Reports"
    },
    {
      head: "Pro",
      price: "$49",
      user: "Unlimited Users",
      storage: "150GB Storage",
      publicprojects: "Unlimited Public Projects",
      access: "Community Access",
      privateprojects: "Unlimited private projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      reports: "Monthly Status Reports"
    },
  ];
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {pricingcontent.map((list) => {
            return (
              <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">
                      {list.head}
                    </h5>
                    <h6 class="card-price text-center">
                      {list.price}
                      <span class="period">/month</span>
                    </h6>
                    <hr />
                    <ul class="fa-ul">
                      <li>
                        <span class="fa-li">
                          <i class="fa fa-check"></i>
                        </span>{list.head==="Free"?list.user:<b>{list.user}</b>}
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fa fa-check"></i>
                        </span>
                        {list.storage}
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fa fa-check"></i>
                        </span>
                        {list.publicprojects}
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fa fa-check"></i>
                        </span>
                        {list.access}
                      </li>
                      <li class={list.head==="Free"?"text-muted":""}>
                        <span class="fa-li">
                          <i class={list.head==="Free"?"fa fa-times":"fa fa-check"}></i>
                        </span>
                        {list.privateprojects}
                      </li>
                      <li class={list.head==="Free"?"text-muted":""}>
                        <span class="fa-li">
                          <i class={list.head==="Free"?"fa fa-times":"fa fa-check"}></i>
                        </span>
                        {list.support}
                      </li>
                      <li class={list.head==="Free"?"text-muted":""}>
                        <span class="fa-li">
                          <i class={list.head==="Free"?"fa fa-times":"fa fa-check"}></i>
                        </span>{list.head==="Pro"?<b>Unlimited </b>:""}
                        {list.domain}
                      </li>
                      <li class={list.head==="Pro"?"":"text-muted"}>
                        <span class="fa-li">
                          <i class={list.head==="Pro"?"fa fa-check":"fa fa-times"}></i>
                        </span>
                        {list.reports}
                      </li>
                    </ul>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
