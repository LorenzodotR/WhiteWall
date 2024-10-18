import { Routes } from '@angular/router';
import { AllChatsComponent } from './pages/all-chats/all-chats.component';
import { ContactChatComponent } from './pages/contact-chat/contact-chat.component';

export const routes: Routes = [
    { path: '', component: AllChatsComponent },
    { path: 'contact-chat', component: ContactChatComponent },
];
