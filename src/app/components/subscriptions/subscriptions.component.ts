import { Component, OnInit } from '@angular/core';
import { SubscriptionModel } from '../../shared/models/Subscription.model';
import { SubscriptionsService } from './subscriptions.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: SubscriptionModel[] = this.service.getSubscriptions();

  constructor(private service: SubscriptionsService) { }

  ngOnInit(): void {
  }

}
