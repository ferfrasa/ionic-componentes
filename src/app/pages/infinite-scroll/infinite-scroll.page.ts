import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: any[]= Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log('objetc')
    setTimeout(() => {

      if( this.data.length >50){
        event.target.complete()
        this.infiniteScroll.disabled= true;
        return;
      }
      const nuevoArreglo = Array(20)
      this.data.push(...nuevoArreglo)

      //parar el loading
      event.target.complete()
    }, 1000);
  }

}
