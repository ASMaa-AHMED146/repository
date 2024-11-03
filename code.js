let button=document.querySelector(".get-button");
let input=document.querySelector("input");
let show_data=document.querySelector(".show-data");

button.onclick=function()
{
    if(input.value=="")
    {
        show_data.innerHTML='<span>Please write Github Username</span>';
    }
    else
    {
       fetch(`https://api.github.com/users/${input.value}/repos`)
       .then((res)=>{
        return res.json();
       })
       .then ((response)=>{

        show_data.innerHTML="";
        response.forEach((el)=>{
            console.log(el.name);
            // let main_span=document.createElement("div");

            let span=document.createElement("div");
            let span_text=el.name;
            span.innerHTML=span_text;
            span.className="repo-box";

            let link=document.createElement('a');
            let link_text=document.createTextNode("visit");
            link.appendChild(link_text);

            link.href=`https://github.com/${input.value}/${el.name}`;
            link.setAttribute('target','_blank');

            let stars=document.createElement("span");
            let stars_text=document.createTextNode(`stars ${el.stargazers_count}`);
            stars.appendChild(stars_text);

            span.appendChild(link);
            span.appendChild(stars);
            show_data.appendChild(span);
        })
        })

    }
}
