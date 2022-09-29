import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-commentBox',
  templateUrl: './commentBox.component.html',
  styleUrls: ['./commentBox.component.scss'],
})
export class CommentsComponent implements OnInit {
  form!: FormGroup;

  @Input() commentsCol: any;

  @Output() sendComment = new EventEmitter();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      text: ['', [Validators.required]],
    });
  }

  commentSent() {
    this.sendComment.emit(this.form.value.text);
  }
}
