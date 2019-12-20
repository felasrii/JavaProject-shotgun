package com.emac.gipsi.shotgun.services;

import java.util.List;

import com.emac.gipsi.shotgun.dto.PartieCommuneDto;
import com.emac.gipsi.shotgun.dto.ResidenceD;
import com.emac.gipsi.shotgun.dto.ResidenceDto;
import com.emac.gipsi.shotgun.model.Residence;


public interface IResidenceService {
	public List<ResidenceDto> getResidences();
	public ResidenceDto getResidence(int id);
	public List<ResidenceD> getResidencesWithShotguns();
}