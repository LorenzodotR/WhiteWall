import { Routes } from '@angular/router';
import { AllChatsComponent } from './pages/all-chats/all-chats.component';
import { ContactChatComponent } from './pages/contact-chat/contact-chat.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'all-chats', component: AllChatsComponent },
    { path: 'contact-chat', component: ContactChatComponent },
];
