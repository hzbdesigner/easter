<?php

class SiteController extends Controller
{
	public $layout='main';

	/**
	 * Declares class-based actions.  actions��ʲô������~~~
	 */
	public function actions()
	{
		return array(
			
		);
	}

	/**
	 * This is the action to handle external exceptions.
	 */
	 public function actionIndex()
	{
	    
	       	$this->render('index');
	}
	


}