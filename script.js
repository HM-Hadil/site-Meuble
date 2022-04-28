function Home_page() {
//header
var head_nav=document.getElementsByTagName('body')[0];
var header_nav=document.createElement('header');
header_nav.id='headerNav';
var div_logo=document.createElement('div');
div_logo.className='logo';
div_logo.innerHTML="<a href=''><img src='star-k-logo.png'>Furni</a>";
var menu=document.createElement('ul');
menu.className='ul_liste';
menu.innerHTML="<li><a href='#home'>Home</a></li>"
              +"<li><a href='#shop'>Shop</a></li>" 
              +"<li><a href='#features'>Features</a></li>" 
              +"<li><a href='#new'>New Arrival</a></li>"
              +"<li><a href='#team'>Team</a></li>"
              +"<li><a href='#footer'>Contact</a></li>"
              +"<span id='toggleID'>&#9776</span>";
              /* +"<span id="toggleID" class="toggleBtn" onclick="openNav()">&#9776</span>"
              +" <span id="closeID" class="closebtn" onclick="closeBtn()">&times;</span>"*/
//body
var body_section=document.getElementsByTagName('body')[0];
var section_backg=document.createElement('section');
section_backg.className='section_bckg';
section_backg.id="home";
var div_content=document.createElement('div');
div_content.className='divContent';
div_content.innerHTML="<h1>Quality is the best thing</br> in the business</h1>"
                       +"<hr>"
                       +"<p>we make our products in the best shape for your happiness.</br>"
                       +"so we hope to build a bridge of trust with you.<br>"
                       +"<div class='bg-link'><a href='#'>Shop Now</a></div>";
//append
head_nav.append(header_nav);
header_nav.append(div_logo);
header_nav.append(menu);
body_section.append(section_backg);
section_backg.append(div_content);

}
Home_page();


function myNav(){
	let bar = document.getElementById("toggleID");
	let nav = document.querySelector(".ul_liste");
	bar.onclick = ()=>{
		if(nav.style.right == "0%"){
			nav.style.right = "-50%";

		}
		else{
			nav.style.right = "0%"
		}
	}
}
myNav();

function myHeader(){
	let header = document.getElementById('headerNav');
	window.addEventListener("scroll",function(){
		if(window.scrollY > 0){
			header.classList.add("active");
		}
		else{
            header.classList.remove("active");
		}
	})
}
myHeader();

function collection_Data(){
var collect_object=[
        {
        	"title":"decoration",
        	"photo":"images(4).jpg"
        },
         {
        	"title":"chair",
        	"photo":"images(10).jpg"
        },
         {
        	"title":"longLamp",
        	"photo":"images(35).jpg"
        },
         {
        	"title":"table",
        	"photo":"images 6).jpg"
        },
         {
        	"title":"doubleTable",
        	"photo":"images(8).jpg"
        }
];

let result_collection=document.getElementsByTagName('body')[0];
var div_collection=document.createElement('div');
div_collection.className='big_collection';
for(let i=0;i<collect_object.length;i++){
	div_collection.innerHTML +="<div class='collect_flex'>"
                                  
                                     +" <div class='imag'>"
                                      +" <img src='"+collect_object[i].photo+"'>"
                                     +" </div>"

                                     +" <div class='link'>"
                                      +" <a href='#'><span></span>"+collect_object[i].title+"</a></div>"
                                     
                                   
	                           +" </div>";
	                           
}
result_collection.append(div_collection);
}
collection_Data();

function collection_Data2(){
var collect_object2=[
                     {
                       "photo":"images(15).jpg",
                       "title":"Brown Chairs",
                       "comment":"Features/Design"
                     },
                     {
                       "photo":"hadil.jpg",
                       "title":"blue Chairs",
                       "comment":"Features/Design"

                     },
                     {
                       "photo":"images(3).jpg",
                       "title":"Brown Chairs",
                       "comment":"Features/Design"
                     },
                     {
                       
                       "photo":"images(2).jpg",
                       "title":"white Chairs",
                       "comment":"Features/Design"
                     },
                     {
                       "photo":"images(16).jpg",
                       "title":"black Chairs",
                       "comment":"Features/Design"
                     },
                     {
                       "photo":"images(20).jpg",
                       "title":"colorChairs",
                       "comment":"Features/Design"
                     }


];
var body_div=document.getElementsByTagName('body')[0];
var div_collection2=document.createElement('div');
div_collection2.className='big_collection2';
div_collection2.id='shop';
var div_shope=document.createElement('div');
div_shope.className='shop_title';
div_shope.innerHTML="<h2>we are proud to present you</br> our furniture</h2>"
	               +" <p>Quality is the easiest way to make beatiful products.</p>"
	                               
var div_card=document.createElement('div');
div_card.className='card';	                          
for(let i=0;i<collect_object2.length;i++){
	div_card.innerHTML+=` 
	                              <div class='content'>                            
	                                <div class="image">
	                                  <img src='${collect_object2[i].photo}'>
	                                </div>
	                                <div class='overly'>
	                                  <h3>${collect_object2[i].title}</h3>
	                                  <p>${collect_object2[i].comment}</p>
	                                
	                                <div class='div_bttn'>
	                                <a href='#'>Shop Now</a>
	                                </div>
	                                </div>
                                   </div>     
	                             


                           	`
}
body_div.append(div_collection2);
div_collection2.append(div_shope);
div_collection2.append(div_card);


}
collection_Data2();

function collection_Data3(){
 var collect_object3=[
                       { "photo":"images37.jpg",
                         "title":"white lamp",
                         "prix":"$44.00",
                         "description":"furniture",
                         "icone1":"facebook.png",
                         "icone4":"facebook.png",
                         "icone3":"twitter.png",
                          "urlFace":"www.facebook.com",
                         "urlTwitter":"www.twitter.com"

                       },
                       {"photo":"images(40).jpg",
                        "title":"multi lamp",
                         "prix":"$22.00",
                         "description":"lightning",
                         "icone1":"facebook.png",
                         "icone4":"facebook.png",
                         "icone3":"twitter.png",
                          "urlFace":"www.facebook.com",
                         "urlTwitter":"www.twitter.com"

                       },
                       {"photo":"images(38).jpg",
                        "title":"stones lamp",
                         "prix":"$53.00",
                         "description":"lightning",
                         "icone1":"facebook.png",
                         "icone4":"facebook.png",
                         "icone3":"twitter.png",
                         "urlFace":"www.facebook.com",
                         "urlTwitter":"www.twitter.com"

                       },
                       {"photo":"images(36).jpg",
                        "title":"long lamp",
                         "prix":"$19.00",
                         "description":"lightning",
                         "icone1":"facebook.png",
                         "icone4":"facebook.png",
                         "icone3":"twitter.png",
                          "urlFace":"www.facebook.com",
                         "urlTwitter":"www.twitter.com"

                       },
                       {"photo":"images(11).jpg",
                        "title":"television",
                         "prix":"$26.00",
                         "description":"decoration",
                         "icone1":"facebook.png",
                         "icone4":"facebook.png",
                         "icone3":"twitter.png",
                          "urlFace":"www.facebook.com",
                         "urlTwitter":"www.twitter.com"

                       },
                       {"photo":"images(5).jpg",
                        "title":"sofa",
                         "prix":"$165.00",
                         "description":"Sold",
                         "icone1":"facebook.png",
                         "icone4":"facebook.png",
                         "icone3":"twitter.png"

                       },
                       {"photo":"images(14).jpg",
                        "title":"cuisine ",
                         "prix":"$120.00",
                         "description":"decoration",
                         "icone1":"facebook.png",
                         "icone4":"facebook.png",
                         "icone3":"twitter.png",
                          "urlFace":"www.facebook.com",
                         "urlTwitter":"www.twitter.com"

                       },
                       {"photo":"images(7).jpg",
                        "title":"white chair",
                         "prix":"$115.00",
                         "description":"furniture",
                         "icone1":"facebook.png",
                         "icone4":"facebook.png",
                         "icone3":"twitter.png",
                          "urlFace":"www.facebook.com",
                         "urlTwitter":"www.twitter.com"

                       }
];                      

var div_boy1=document.getElementsByTagName('body')[0];

var div_collection3=document.createElement('div');
div_collection3.className='big_collection3';
div_collection3.id='features';
var div_card1=document.createElement('div');
div_card1.className='card1';

var div_shope1=document.createElement('div');
div_shope1.className='shop_title1';
div_shope1.innerHTML="<p>brows our items</p>"
                      +"<h1>ideal for your home</h1>";

for(let i=0;i<collect_object3.length;i++){
	div_card1.innerHTML+=`<div class="content1">
	                        <div class='images'>
                            <img src='${collect_object3[i].photo}'>
                            </div>
                            <div class="ti_pri">
                             <h3>${collect_object3[i].title}</h3> 
                             <span>${collect_object3[i].prix}</span>
                            </div>
                            <h5>${collect_object3[i].description}</h5> 
                            <div class='overly1'>
                              <div class='icones'>
                               <a href="${collect_object3[i].urlFace}" target="_blank"><img src="${collect_object3[i].icone1}"><a/> 
                               <a href="${collect_object3[i].urlTwitter}" target="_blank"><img src="${collect_object3[i].icone3}"><a/>


                              </div>
                            </div>
	                       </div>
	`
}
div_collection3.append(div_shope1);
div_collection3.append(div_card1);
div_boy1.append(div_collection3) ;

}
collection_Data3();


function collection_Data4(){
var div_body4=document.getElementsByTagName('body')[0];
var div_collection4=document.createElement('div');
div_collection4.className='big_collection4';
div_collection4.id='new';
div_shope4=document.createElement('div');
div_shope4.className='shop_title4';
div_shope4.innerHTML="<h2>Discover our furniture from our resources</h2><h5>View our everday amazing products</h5>";
var div_card4=document.createElement('div');
div_card4.className='card4';
div_card4.innerHTML="<img src='blue.jpg'>"
                   +"<button id='btn_model' onclick='display_modal()'>+<button>";
               
div_body4.append(div_collection4);
div_collection4.append(div_shope4);
div_collection4.append(div_card4);

function popModel(){
var div_model=document.createElement('div');
div_model.className='pop_model';
div_model.id='pop_modal';
div_model.innerHTML="<span id='close_model' onclick='closeModel()'>&times;</span>"
                   +"<div class='div_img_model'><img src='images(8).jpg'></div>"
                   +"<div class='div_txt_model'><h4>New Couch</h4><p>Take our furniture with perfect quality and price</p> <a href='#'>Shop Now</a>";
   
div_card4.append(div_model);                                   
}
popModel();
}

collection_Data4();
function display_modal(){
  document.getElementById('pop_modal').style.display="flex";
}
function closeModel(){
document.getElementById('pop_modal').style.display="none";
}
//when users click any where outside of the modal
var modal = document.getElementById('pop_modal');
window.onclick = function(event){
  if(event.target==modal){
        modal.style.display="none";
  }
}

//team
function collection_Data5(){
var collect_object5=[
                      {"photo":"télécharger.jpg",
                      "name":"Sersse Barela"
                      },
                      {"photo":"images(26).jpg",
                      "name":"Nicolas Barella"
                      },
                      {"photo":"images(27).jpg",
                      "name":"James khan"
                      },
                      {"photo":"images(26).jpg",
                      "name":"Smith leonard"
                      },
                      {"photo":"images(29).jpg",
                      "name":"Jessica billioner"
                      },
                      {"photo":"images(26).jpg",
                      "name":"hedy aamry"
                      }

];
var div_body5=document.getElementsByTagName('body')[0];

var div_collection5=document.createElement('div');
div_collection5.className='big_collection5';
div_collection5.id='team';
var div_shope5=document.createElement('div');
div_shope5.className='shop_title5';
div_shope5.innerHTML="<h6>OUR CREATIVE TEAM</h6>"
                     +"<h4>Meet our team</h4>";
div_collection5.append(div_shope5);

var div_card5=document.createElement('div');
div_card5.className='card5';

for(let i=0;i<collect_object5.length;i++){
div_card5.innerHTML+=`<div class='content5'>
                        <div class='team_img'>
                            <img src='${collect_object5[i].photo}'>
                        </div>
                        <h5>${collect_object5[i].name}</h5>
                      </div>
`
}
div_collection5.append(div_card5);
div_body5.append(div_collection5);
}
collection_Data5();

//last section
function collection_Data6(){
var collect_object6=[
                      {
                        "photo":"images(13).jpg",
                        "icone":"facebook.png"
                      },
                      {
                        "photo":"images(19).jpg",
                        "icone":"facebook.png"
                      },
                      {
                        "photo":"img4.jpg",
                        "icone":"facebook.png"
                      },
                      {
                        "photo":"img8.jpg",
                        "icone":"facebook.png"
                      },
                      {
                        "photo":"images(23).jpg",
                        "icone":"facebook.png"
                      }

];

var div_photo=document.getElementsByTagName('body')[0];
var div_collection6=document.createElement('div');
div_collection6.className='big_collection6';
for (let i=0;i<collect_object6.length;i++){
div_collection6.innerHTML+=` 
                              <div class='card6'>
                               <img src='${collect_object6[i].photo}'>
                               <div class='icn_fb'>
                                 <img src='${collect_object6[i].icone}'>
                               </div>
                              </div>
                        

  `
}

div_photo.append(div_collection6);
}
collection_Data6();

/*footer*/
function footer_fnct(){

var div_body8=document.getElementsByTagName('body')[0];
var div_collection_Footer=document.createElement('div');
div_collection_Footer.className='big_collection_footer';
div_collection_Footer.id='footer'
var div_card_txt1=document.createElement('div');
div_card_txt1.className='card_txt1';
div_card_txt1.innerHTML="<h2>furniture</h2>"
                       +"<p>What I find remarkable is that this text has been the industry's standard dummy text ever since some printer</p>";
var div_card_txt2=document.createElement('div');
div_card_txt2.className='card_txt2';
div_card_txt2.innerHTML="<h2>Helpful links</h2>"
                       +"<p>About us our blog visit site contact us apply a job</p>";
var div_card_txt3=document.createElement('div');                       
div_card_txt3.className='card_txt3';
div_card_txt3.innerHTML="<h2>Shopping</h2>"
                       +"<p>online cards return policy privocy policy shipping inventary</p> ";
var div_card_txt4=document.createElement('div'); 
div_card_txt4.className='card_txt4';
div_card_txt4.innerHTML="<h2>payment method</h2>"
                       +"<p>select one of the most comman ways to pay a money for our products</p>";
 div_collection_Footer.innerHTML="<hr>";                                     
div_body8.append(div_collection_Footer);
div_collection_Footer.append(div_card_txt1);
div_collection_Footer.append(div_card_txt2);
div_collection_Footer.append(div_card_txt3);
div_collection_Footer.append(div_card_txt4);
}
footer_fnct();
function fonct_copy() {
var copy_body=document.getElementsByTagName('body')[0];
var copy_right=document.createElement('p');
copy_right.className='cpy_r';
copy_right.innerHTML="<hr>"
                     +"<h5>Copyright &copy; At 24/1/2022 By <a>Hammami Hadil</a></h5>";
copy_body.append(copy_right);
}
fonct_copy();