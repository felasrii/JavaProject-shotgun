import { PartieCommunesService } from "./../../../services/partie-communes/partie-communes.service";
import { Component, OnInit } from "@angular/core";
import { PartieCommune } from "src/app/model/partie-commune.model";
import { ShotgunService } from 'src/app/services/shotgun/shotgun.service';
import { Shotgun } from 'src/app/model/shotgun.model';
@Component({
  selector: "app-list-partiecommunes",
  templateUrl: "./list-partiecommunes.component.html",
  styleUrls: ["./list-partiecommunes.component.css"]
})
export class ListPartiecommunesComponent implements OnInit {
;
  public partiecommunesShotguns: Array<PartieCommune>;
  public shotguns:Array<Shotgun>;
  constructor(private PartiecommunesService: PartieCommunesService, private shotgunService:ShotgunService) {
    this.PartiecommunesService.partiesCommunes.subscribe((values: Array<PartieCommune>) => {
      this.partiecommunesShotguns = values;
    });
    this.shotgunService.shotgunsList.subscribe(
      (values: Array<Shotgun>) => {
      this.shotguns=values
    }
      
      );
      this.shotgunService.getAll({}).subscribe(
        (values: Array<Shotgun>) => {
        this.shotguns=values
     
        });
   
  }

  ngOnInit() {
    this.PartiecommunesService.getPartiesCommunesShotguns();
   
  }
}
