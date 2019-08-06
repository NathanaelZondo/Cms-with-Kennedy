import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { SlistService } from '../slist.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ahotel',
  templateUrl: './ahotel.page.html',
  styleUrls: ['./ahotel.page.scss'],
})
export class AhotelPage implements OnInit {

  ngOnInit()
  {

  }
  constructor( public shopping:SlistService,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AhotelPage');
  }

  hotel:Hotel =
  {
      
    name:undefined,
    roomtype:undefined,
    singlep:undefined,
    doublep:undefined,
    kingp:undefined,
    queenp:undefined,
    discount:undefined,
    rating:undefined,
    phone:undefined,
    address:undefined,
   feature1:undefined,
   feature2:undefined,
   feature3:undefined,
    feature4:undefined,
    description:undefined,
    pic1:undefined
  
  }

 



  addhotel(hotel)
  {
    
    this.shopping.pics(hotel.pic1);
    console.log(hotel)
    if(hotel.discount<0)
    {
      
    }
    else 
    if(hotel.name=="")
    {
      
    }
    
    else if(hotel.singlep==undefined||hotel.doublep==undefined||hotel.kingp==undefined||hotel.queenp==undefined)
    {
      
    }
    else if(hotel.address=="")
    {
      
    }
    else{
     
    
      hotel.discount =hotel.discount/100;
    this.shopping.addhotel(hotel);
      
      
    }
      }

}

