import { Component,Input, input,Output,output ,signal, computed, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
//import { DUMMY_USERS } from '../dummy-users';
//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

//type User = {id: string, avatar: string, name: string};



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    // @Input({required: true}) avatar!: string;
    // @Input({required: true}) name!: string;
    // @Output() select = new EventEmitter<string>();
     //@Input({required: true}) user! : {id: string, avatar: string, name: string};
    // id = input.required<string>();
    // avatar = input.required<string>();
    // name = input.required<string>();
    //user = input.required<{id: string, avatar: string, name: string}>();
    user = input.required<User>();
    selected = input.required<boolean>();
    imagePath = computed(() => `assets/users/${this.user().avatar}`);
    select = output<string>();
    onSelectUser() {
        this.select.emit(this.user().id);
    }
    //  get imagePath() {
    //     return `assets/users/${this.avatar()}`;
    // }
}









// export class UserComponent {
//      selectedUser = signal(DUMMY_USERS[randomIndex]);
//      imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);


//      get imagePath() {
//          return `assets/users/${this.selectedUser.avatar}`;
//      }

//     onSelectUser() {
//          const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//          this.selectedUser.set(DUMMY_USERS[randomIndex]);
//     }
// }
