package com.emac.gipsi.shotgun.dto;

import java.util.List;

public class ResidenceD {
	private int id;
	private String name;
	private List<ShotgunDto> listeShotguns;
	
	
	
	
	
	public List<ShotgunDto> getListeShotguns() {
		return listeShotguns;
	}
	public void setListeShotguns(List<ShotgunDto> listeShotguns) {
		this.listeShotguns = listeShotguns;
	}
	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
}
