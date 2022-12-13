import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ERRORS } from '../../../assets/i18n/errors';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  errorMessage!: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const errorMessage =
      this.route.snapshot.paramMap.get('errorKey') ?? 'default';
    this.errorMessage = ERRORS[errorMessage];
  }
}
