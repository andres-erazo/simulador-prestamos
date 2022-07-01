import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {



  // autoTicks = false;
  // disabled = false;
  // invert = false;
  // showTicks = false;
  // value = 0;
  // vertical = false;
  // tickInterval = 1;


  userForm!: FormGroup;
  loginDisplay = false;
  // public $login: Observable<ResponseLogin>


  constructor() {
  //  private authServie: MsalService, private msaBroadCastService: MsalBroadcastService ) {
   }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      nombre: new FormControl('', [ Validators.required ] ),
      correo: new FormControl('', [ Validators.required ] ),
      cedula: new FormControl('', [ Validators.required ] ),
      requestValue:  new FormControl(''),
      requestValue2:  new FormControl('')
    });
  }

  /**
   * Este método se encarga de crear un usuario.
   *
   * @memberof UsersComponent
   */
  createUser(): void {
    console.log(this.userForm.controls)
  }

}
