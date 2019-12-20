package com.emac.gipsi.shotgun.services.impl;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emac.gipsi.shotgun.dto.FamilleDto;
import com.emac.gipsi.shotgun.dto.FamilleShotgunDto;
import com.emac.gipsi.shotgun.dto.ResidenceD;
import com.emac.gipsi.shotgun.dto.ResidenceDto;
import com.emac.gipsi.shotgun.model.Famille;
import com.emac.gipsi.shotgun.model.PartieCommune;
import com.emac.gipsi.shotgun.model.Residence;
import com.emac.gipsi.shotgun.repositories.PartieCommuneRepository;
import com.emac.gipsi.shotgun.repositories.ResidenceRepository;
import com.emac.gipsi.shotgun.services.IResidenceService;

@Service("residenceService")
@Transactional
public class ResidenceService implements IResidenceService {

	@Autowired
	private ResidenceRepository residenceRepository;
	private PartieCommuneRepository partieRepository;
	private final ModelMapper modelMapper = new ModelMapper();
	
	public ResidenceService(ResidenceRepository residenceRepository) {
		this.residenceRepository = residenceRepository;
	}
	
	@Override
	public List<ResidenceDto> getResidences() {
		Type listType = new TypeToken<List<ResidenceDto>>() {}.getType();
		List<ResidenceDto> result = modelMapper.map(residenceRepository.findAll(), listType);
		return result;
	}

	@Override
	public ResidenceDto getResidence(int id) {
		Optional<PartieCommune> residence = partieRepository.findById(id);
		if (residence.isPresent()) {
			ResidenceDto result = new ResidenceDto();
			modelMapper.map(residence.get(), result);
			return result;
		}

		return null;
	}

	@Override
	public List<ResidenceD> getResidencesWithShotguns() {
		Type listType = new TypeToken<List<ResidenceDto>>() {}.getType();
		List<ResidenceD> result = modelMapper.map(residenceRepository.findAll(), listType);
		return result;
	}

}
