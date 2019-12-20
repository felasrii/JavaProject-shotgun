package com.emac.gipsi.shotgun.controllers;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.emac.gipsi.shotgun.dto.PartieCommuneDto;
import com.emac.gipsi.shotgun.dto.ResidenceD;
import com.emac.gipsi.shotgun.dto.ResidenceDto;

import com.emac.gipsi.shotgun.services.IResidenceService;

@CrossOrigin
@RequestMapping("/residences")
@RestController
public class ResidenceController {
	
	@Autowired
	private IResidenceService residenceService;


	@RequestMapping(path = "", method = RequestMethod.GET)
	public List<ResidenceDto> getresidencies() {
		return residenceService.getResidences();
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	public ResidenceDto getResidenceById(@PathVariable("id") int id) {
		return residenceService.getResidence(id);
	}
	@RequestMapping(path ="/shotguns", method = RequestMethod.GET)
	public List<ResidenceD> getResidenciesWithShotguns() {
		return residenceService.getResidencesWithShotguns();
	}

}