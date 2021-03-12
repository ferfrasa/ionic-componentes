import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static:false}) lista: IonList;

   usuarios : Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios =this.dataService.getUser()
  }

  favorite(user){
    console.log("favoriyr", user)
    this.lista.closeSlidingItems()

  }

  share(user){
    console.log("share", user)
    this.lista.closeSlidingItems()

  }

  borrar(user){
    console.log("borrar", user)

  }

}
