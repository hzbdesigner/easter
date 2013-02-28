<?php

class SiteController extends Controller
{
	public $layout='main';

	/**
	 * Declares class-based actions.  actions是什么作用呢~~~
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