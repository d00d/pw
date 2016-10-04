App = Ember.Application.create();

App.Router.map(function() {
  this.resource('rrd');
  this.resource('sa');
  this.resource('p1');
  this.resource('p2');
  this.resource('p3');
  this.resource('p4');
  this.resource('p5');
  this.resource('p6');
  this.resource('p7');
  this.resource('p8');
});

// --------- ******** Grip ************
App.SaRoute = Ember.Route.extend ({
	model: function() {
		return ['SWK','SHW','PPG','VFC','PNR','NUE','BF-B','HRL','MHFI','GPC','MKC','BEN','TGT','CLX','MCD','SYY','CAH','AFL','CB','CINF','GWW','ADM','SIAL','ED','BCR','BDX','MDT','PG','EMR','ABT','XOM','LEG','CVX','HCP','LOW','ITW','CTAS','ECL','KMB','APD','CL','WBA','ADP','TROW','DOV','PEP','ABBV','MMM','KO','JNJ','T','WMT'];
	}
});
// --------- ******** SIA ************
App.P1Route = Ember.Route.extend ({
	model: function() {
		return ['EPD','BP','IIM','JPS','MAA','LQD','DVY','SYY','PG','AB','JRO','FRA','BMO','D','AZSEY','CME','HCN','KMI','FUN','ESD','OKE','OGS','CME','HCN','ESD','PSA','EOI','ABBV','WFC.W','RF/B','UNP','FCX','NRP','HSY','ATVI','MSFT','HSBC','IMMU','MCD','LO','PNC/P','WRB','AFG','TRV','CB','Y','AXS','VNQ'];
	}
});
// --------- ******** Area 57 ************
App.P2Route = Ember.Route.extend ({
  model: function() {
  		var data = new Ember.RSVP.Promise(function(resolve) {
  			Tabletop.init({
        		key: '1GREdML1F5LThPDpTXSen_EaIiY8NMWPy4AAEIU1S_gI',
        		simpleSheet: true,
        		callback: function(data) {
        			resolve(data);
  				}
  			});
  				//var dis = document.getElementById("data").innerHTML = "['" + [ data[0].ticker, data[1].ticker, data[2].ticker ].join("', ") +"']";
  				//return promise;
   		});
		//console.log("['" + [ data[0].ticker, data[1].ticker, data[2].ticker ].join("', ") +"']");
		//console.log(data);
		//return "['" + [ data[0].ticker, data[1].ticker, data[2].ticker ].join("', ") +"']";
		// iterate through and pick out ticker only.
		console.log(data);
		return data;
		
  	}
});

// --------- ******** LIKE NOW ************  
App.P3Route = Ember.Route.extend ({
	model: function() {
		return ['AEE','AZPN','APA','APC','BP','COH','EVT','PRQR','HRTX','RST','RGR','JPS','ATRA','FRP','ADXS','NK','KTOS','AEL','EGT.V','ROKA','OVAS','GERN','GLP','PPHM','VRTX','LABU','SWKS','SHOP','STM','LFC','PRTK','MA','V','RTN','BF/B','CELG','UVE','NG','UNP','ABT','FF.V','ADM','KERX','PM','NLY','GSK','BVX','NAT','DLR','GNW','CAT','ININ','AVP','ABC','AAPL','BX','TAP','CB','MRVL','BUD','COR','GLOP','ECA','GOLR','DOW','BIOA','SLB','HD','JPM','CCI','FIZZ','PSA','GSK','SFDC','SBUX','ORCL','MSFT','MCD','NLY','VGR','JNJ','T','BA','PBH','NAT','GEO','AINV','ARCC','MAIN','WMB','HCN','GD','OAK','PZZA','PICK','WY','FXI','QCOM','WPRT','SBIO','DNB','OXY','THS','CVX','STLD','PFE','MRVL','CME'];
	}
});
// --------- ******** Resources Sector Picks ************
App.P4Route = Ember.Route.extend ({
	model: function() {
		return ['BP','NGLS','LINE','ARLP','BBEP','NRP','IIM','JPS','CHL','BMY','AXS','BAX','AFL','GOV','JRO','UUV','COH','KKR','LTL','GMOM','GLAD','AB','JPS','BMO','FRA','AZSEY','IDV','PCL','CME','HSBC','WMT','MCD','MEMP','KO','PG','JNJ','MSFT','BDX','SYY','INTC','AAPL','EPD','DPM','WPZ','KMI','SEP','VNR'];
	}
});
// --------- ******** Hedge & Macro Indicators ************
App.P5Route = Ember.Route.extend ({
	model: function() {
		return ['$VIX','$BRENT','$USD','$GOLD','DSUM','$SILVER','$NYSI','$NASI','SPY','PSQ','SQQQ','DOG','SH','SIJ','SZK','MYY','MZZ','SDD','SBB','RWM','DBA','TBT','$VIX','GDX','$SILVER','$NYSI','$NASI','SPY','PSQ','DOG','SH','XLF','$MYY','SBB','$TICK','DUG','REW','SKF','SMN','SCC','SZK','EUM','$BPSPX','$BPHEAL','$BPUTIL','$BPFINA','$BPDISC','$BPSTAP','$BPINDY','$XOI','IYR','QID','DXD','SDS','MZZ','HDGE','NYY','TWM','$TICK','DUG','REW','SKF','SMN','SCC','SZK','EUM','IYR','ROM'];

	}
});
// --------- ******** DOGS of the Dow ************
App.P6Route = Ember.Route.extend ({
	model: function() {
		return ['AAPL','CVX','VZ','CAT','WMT','CSCO','PFE','IBM','XOM','BA','MRK','INTC','CLX','MO',];
	}
});
// --------- ******** PORTFOLIO PAST & PRESENT AKA THE BENCH ************
App.RrdRoute = Ember.Route.extend ({
	model: function() {
		return ['AZO','SLW','VNM','XLU','WEC','AXL','AXS','AFL','ARI','USCI','BRI.V','BMO','BAX','BXLT','DGI','DEO','CALM','TUP','TASR','GULTU','ARIA','CALM','NUAN','MRVL','NAT','CRAY','PEP','SHOP','SAND','WMT','AUY','BX','CCJ','CHL','CME','COH','DE','DSUM','ESV','EOG','EVT','FYLD','GILD','KERX','MUX','LVMUY','NOV','NEWT','MSFT','PEP','GMOM','GULTU','HTBX','MGNX','PLG','SCPZF','SHLD','STZ','SYY','SBUX','SDRL','SBIO','SHOP','TGT','TJX','UA','VAR','WPRT','RPM','WRB'];
	}
});
// --------- ******** !!!!!!!!! Active Portoflio Holds !!!!!!!!!!!!************
App.P7Route = Ember.Route.extend ({
	model: function() {
		return ['$VIX','$BRENT','$USD','$GOLD','AA-B','AAPL','ACIA','ALS.TO','AFG','CSLT','CMG','CLCT','TZA','AMZN','ARAY','BMY','BX','BXE','CMG','CLCT','CSCO','DBD','DLR','DIS','EGAS','EVA','ELNK','FRO','FB','FUN','GE','GDXJ','GILD','HCN','GOOG','HRL','IPHYF','KTOS','KWEB','MAA','MFA','KKR','MO','NGPHF','NAT','NUV','OHI','OVAS','PSTG','PRTK','PSX','RAI','RGR','SCPZF','STZ','TEVA','TGT','TWLO','VNQ','V','VZ'];
	}
});
App.P8Route = Ember.Route.extend ({
	model: function() {
		return ['ADM','CLCT','GLOP','FUN','TUP','PM','MO','EXPD','TIC','MTW','PMT','PSEC','NLY','MFA','HTS','GAIN','BX','HCN','OHI','SNH','GSK','EGAS','COR-A','COR','DLR-E','DLR','GRMN'];
	}
});
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['AFL','APD','ARCP','AVA','BAX','BBL','BNS','CLX','COP','CVX','DLR','EMR','GE','HRS','IBM','ITW','JNJ','KMI','KO','LO','MCD','MDT','MO','NSC','O','OGS','OHI','OKE','PEP','PG','PM','PSX','RDS.B','RTN','SBSI','SYY','T','TD','TGT','TIS','VOD','VZ','WFC','WMT','XOM','MSFT','INTC','STZ','CTO','FUBC','BP','RRC','KLAC','ENS','PM','CF','CPN','E','LLY','MDT','APC','BP','PM','VZ','MO','T','ABT','CRESY','CHK','CPN','FCX','KMI','PCL','SOHU','','TNH','SCCO','AFG','WRB','TRV','CB','PRA','AFSI','NG','AMH','WTW','ETE','EMC','TRGP','Y','D','WMT','HSY','IO','GOV','O','LNG','CSCO','DVA','LPI','DG','HL','NEA','IIM','NUV','NUAN','SWKS','TNH','FYLD','L','COST','SYLD','CJES','PKW','MIL','AREX','CPE','ESV','NOV','SDRL','MA','APA','EXXI','SWIR'];
  }
});