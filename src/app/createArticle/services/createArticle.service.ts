import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {ArticleInputInterface} from 'src/app/shared/types/articleInput.interface'
import {ArticleInterface} from 'src/app/shared/types/article.interface'
import {environment} from 'src/environments/environment'
import {SaveArticleResponseInterface} from 'src/app/shared/types/saveArticleResponse.interface'

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    console.log(environment.apiUrl + '/articles')
    const fullUrl = environment.apiUrl + '/articles'

    return this.http
      .post<SaveArticleResponseInterface>(fullUrl, {article: articleInput})
      .pipe(
        map((response: SaveArticleResponseInterface) => {
          console.log(response.article)
          return response.article
        })
      )
  }
}
