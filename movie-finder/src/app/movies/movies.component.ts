import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../service/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popular;
  theaters;
  kids;
  bestDramas;
  searches:any;

  isSearched: boolean;

  constructor(private movieService: MoviesService) {
  }

  search(myQuery){

    let value = myQuery['search'];

    this.movieService.findAMovie(value).subscribe((data) => {
      this.searches = data;
      this.isSearched = true;
    })
  }


  ngOnInit() {
    this.movieService.getPopular().subscribe(data => {
      this.popular = data;
    });

    this.movieService.getTheaters().subscribe(data => {
      this.theaters = data;
    });

    this.movieService.getKids().subscribe(data => {
      this.kids = data;
    });

    this.movieService.getBestDramas().subscribe(data => {
      this.bestDramas = data;
    });

  }

}
