import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-my-non-buildable-lib',
  imports: [CommonModule],
  templateUrl: './my-non-buildable-lib.component.html',
  styleUrl: './my-non-buildable-lib.component.css',
})
export class MyNonBuildableLibComponent {}
