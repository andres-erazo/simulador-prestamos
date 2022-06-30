import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userForm!: FormGroup;
  loginDisplay = false;
  // public $login: Observable<ResponseLogin>


  constructor() {
  //  private authServie: MsalService, private msaBroadCastService: MsalBroadcastService ) {
   }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      nombre: new FormControl('' ),
      correo: new FormControl('' ),
      cedula: new FormControl('' )

    });
  }

  /**
   * Este método se encarga de crear un usuario.
   *
   * @memberof UsersComponent
   */
  createUser(): void {

  }

}
