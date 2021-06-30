import { Injectable } from '@angular/core';
import { SubscriptionModel } from '../../shared/models/Subscription.model';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  private subscriptions: SubscriptionModel[] = [{
      id: 1,
      user_group: 'administrator',
      title: 'Subscription 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      status: false
  }, {
    id: 2,
    user_group: 'rrhh',
    title: 'Subscription 2',
    description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    status: true
  }, {
    id: 3,
      user_group: 'administrator',
      title: 'Subscription 3',
      description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      status: true
  }, {
    id: 4,
      user_group: 'administrator',
      title: 'Subscription 4',
      description: 'It has survived not only five centuries, but also the leap into electronic typesetting.',
      status: true
  }, {
    id: 5,
      user_group: 'rrhh',
      title: 'Subscription 5',
      description: 't was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
      status: false
  }, {
    id: 6,
      user_group: 'administrator',
      title: 'Subscription 6',
      description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      status: false
  }];

  constructor(private authService: AuthService) { }

  getSubscriptions(): SubscriptionModel[] {
    const user = this.authService.getAuth();
    return this.filterSubscriptionsByRole(user);
  }

  private filterSubscriptionsByRole(user: User) {
    return this.subscriptions.filter(item => item.user_group === user.role);
  }
}
