import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Idea } from '@app/models/idea';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent {
  @Input()
  idea!: Idea;
  @Input()
  displayOptions = false;

  @Output()
  onDelete = new EventEmitter();
  @Output()
  onUpvote = new EventEmitter();
  @Output()
  onDownvote = new EventEmitter();

  votes = 0;

}
