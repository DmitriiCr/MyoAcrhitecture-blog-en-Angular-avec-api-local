import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core'
import {ArticleInputInterface} from 'src/app/shared/types/articleInput.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'mc-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>()

  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' '),
    })
  }

  onSubmit(): void {
    console.log(this.form)
    this.articleSubmitEvent.emit(this.form.value)
  }
}
