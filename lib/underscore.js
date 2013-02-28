  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>underscore/underscore.js at master · documentcloud/underscore</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="pY/IH24blU2HF5DNCgRHMlAQkBibCk5oQqzTy9StCL8=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-f7976f95014bc2111aef175010efc887f9aab779.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-31391be43735cfe2e1fd3b3089a60a0a69567a65.css" media="screen" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-898c2db1f151d566cfe6a57c33338e30b3b75033.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-092742e5102e50e8fbc0c123ebaa0461115f3507.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="07c1f019cb83374740e3c63ba8d4ee67">

        <link data-pjax-transient rel='permalink' href='/documentcloud/underscore/blob/48e373a522bb98802154a0fa0e517051fca61a33/underscore.js'>
    <meta property="og:title" content="underscore"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/documentcloud/underscore"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/984df9bc1103ee70b636c87f414411a6?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="JavaScript&#39;s utility _ belt. Contribute to underscore development by creating an account on GitHub."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="documentcloud/underscore"/>

    <meta name="description" content="JavaScript&#39;s utility _ belt. Contribute to underscore development by creating an account on GitHub." />

  <link href="https://github.com/documentcloud/underscore/commits/master.atom" rel="alternate" title="Recent Commits to underscore:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


              <div class="topsearch command-bar-activated ">
      <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="command-bar" placeholder="Search or type a command" tabindex="1" data-username="MisterY" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>
  <ul class="top-nav">
      <li class="explore"><a href="https://github.com/explore">Explore</a></li>
      <li><a href="https://gist.github.com">Gist</a></li>
      <li><a href="/blog">Blog</a></li>
    <li><a href="http://help.github.com">Help</a></li>
  </ul>
</div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/MisterY" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/ed54e5be3f2156f6de4647a264b6c140?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> MisterY
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
        <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
          <span class="mini-icon mini-icon-logout"></span>
        </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="pY/IH24blU2HF5DNCgRHMlAQkBibCk5oQqzTy9StCL8=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="349241" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container js-select-menu-pane">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/documentcloud/underscore/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/documentcloud/underscore/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/documentcloud/underscore/stargazers">7,393</a>
    </li>

        <li>
          <a href="/documentcloud/underscore/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/documentcloud/underscore/network" class="social-count">1,109</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/documentcloud" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">documentcloud</span>
                  </a></span> /
                <strong><a href="/documentcloud/underscore" class="js-current-repository">underscore</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li><a href="/documentcloud/underscore" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/documentcloud/underscore/network" highlight="repo_network">Network</a></li>
    <li><a href="/documentcloud/underscore/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>5</span></a></li>

      <li><a href="/documentcloud/underscore/issues" highlight="repo_issues">Issues <span class='counter'>10</span></a></li>

      <li><a href="/documentcloud/underscore/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/documentcloud/underscore/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/documentcloud/underscore/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">50</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches" data-filterable-for="commitish-filter-field" data-filterable-type="substring">


              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/async/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="async" rel="nofollow" title="async">async</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/gh-pages/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/master/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags" data-filterable-for="commitish-filter-field" data-filterable-type="substring">

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.4.4/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.4" rel="nofollow" title="1.4.4">1.4.4</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.4.3/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.3" rel="nofollow" title="1.4.3">1.4.3</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.4.2/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.2" rel="nofollow" title="1.4.2">1.4.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.4.1/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.1" rel="nofollow" title="1.4.1">1.4.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.4.0/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.0" rel="nofollow" title="1.4.0">1.4.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.3.3/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.3" rel="nofollow" title="1.3.3">1.3.3</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.3.2/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.2" rel="nofollow" title="1.3.2">1.3.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.3.1/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.1" rel="nofollow" title="1.3.1">1.3.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.3.0/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.0" rel="nofollow" title="1.3.0">1.3.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.2.4/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.4" rel="nofollow" title="1.2.4">1.2.4</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.2.3/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.3" rel="nofollow" title="1.2.3">1.2.3</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.2.2/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.2" rel="nofollow" title="1.2.2">1.2.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.2.1/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.1" rel="nofollow" title="1.2.1">1.2.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.2.0/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2.0" rel="nofollow" title="1.2.0">1.2.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.1.7/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.7" rel="nofollow" title="1.1.7">1.1.7</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.1.6/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.6" rel="nofollow" title="1.1.6">1.1.6</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.1.5/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.5" rel="nofollow" title="1.1.5">1.1.5</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.1.4/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.4" rel="nofollow" title="1.1.4">1.1.4</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.1.3/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.3" rel="nofollow" title="1.1.3">1.1.3</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.1.2/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.2" rel="nofollow" title="1.1.2">1.1.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.1.1/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.1" rel="nofollow" title="1.1.1">1.1.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.1.0/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1.0" rel="nofollow" title="1.1.0">1.1.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.0.4/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.4" rel="nofollow" title="1.0.4">1.0.4</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.0.3/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.3" rel="nofollow" title="1.0.3">1.0.3</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.0.2/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.2" rel="nofollow" title="1.0.2">1.0.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.0.1/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.1" rel="nofollow" title="1.0.1">1.0.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/1.0.0/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.0" rel="nofollow" title="1.0.0">1.0.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.6.0/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.6.0" rel="nofollow" title="0.6.0">0.6.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.5.7/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.7" rel="nofollow" title="0.5.7">0.5.7</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.5.5/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.5" rel="nofollow" title="0.5.5">0.5.5</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.5.4/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.4" rel="nofollow" title="0.5.4">0.5.4</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.5.3/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.3" rel="nofollow" title="0.5.3">0.5.3</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.5.2/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.2" rel="nofollow" title="0.5.2">0.5.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.5.1/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.1" rel="nofollow" title="0.5.1">0.5.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.5.0/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.0" rel="nofollow" title="0.5.0">0.5.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.4.7/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.4.7" rel="nofollow" title="0.4.7">0.4.7</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.4.6/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.4.6" rel="nofollow" title="0.4.6">0.4.6</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.4.5/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.4.5" rel="nofollow" title="0.4.5">0.4.5</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.4.4/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.4.4" rel="nofollow" title="0.4.4">0.4.4</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.4.3/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.4.3" rel="nofollow" title="0.4.3">0.4.3</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.4.2/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.4.2" rel="nofollow" title="0.4.2">0.4.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.4.1/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.4.1" rel="nofollow" title="0.4.1">0.4.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.4.0/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.4.0" rel="nofollow" title="0.4.0">0.4.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.3.3/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.3.3" rel="nofollow" title="0.3.3">0.3.3</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.3.2/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.3.2" rel="nofollow" title="0.3.2">0.3.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.3.1/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.3.1" rel="nofollow" title="0.3.1">0.3.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.3.0/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.3.0" rel="nofollow" title="0.3.0">0.3.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.2.0/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.2.0" rel="nofollow" title="0.2.0">0.2.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.1.1/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1.1" rel="nofollow" title="0.1.1">0.1.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/documentcloud/underscore/blob/0.1.0/underscore.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1.0" rel="nofollow" title="0.1.0">0.1.0</a>
              </div> <!-- /.select-menu-item -->

            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/documentcloud/underscore" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/documentcloud/underscore/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/documentcloud/underscore/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">3</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:a7bcbc76f932f9ca57bbba5ec61783b3 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:a7bcbc76f932f9ca57bbba5ec61783b3 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/documentcloud/underscore" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">underscore</span></a></span></span><span class="separator"> / </span><strong class="final-path">underscore.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="underscore.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/documentcloud/underscore/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/0168f51cd822a820c606c259b80e253f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/braddunbar" rel="author">braddunbar</a></span>
    <time class="js-relative-date" datetime="2013-02-15T13:28:26-08:00" title="2013-02-15 13:28:26">February 15, 2013</time>
    <div class="commit-title">
        <a href="/documentcloud/underscore/commit/3fbd1bd5d38e1b871eb3626c08eb802b8ffbfc1e" class="message">Restore ctor variable for fallback.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>85</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="jashkenas" href="/documentcloud/underscore/commits/master/underscore.js?author=jashkenas"><img height="20" src="https://secure.gravatar.com/avatar/32652ed5b8fbd2ecdb1c78e9ac567b4b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="braddunbar" href="/documentcloud/underscore/commits/master/underscore.js?author=braddunbar"><img height="20" src="https://secure.gravatar.com/avatar/0168f51cd822a820c606c259b80e253f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ratbeard" href="/documentcloud/underscore/commits/master/underscore.js?author=ratbeard"><img height="20" src="https://secure.gravatar.com/avatar/b6acfba347fcefa47942e2e95ba4d5bc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ryantenney" href="/documentcloud/underscore/commits/master/underscore.js?author=ryantenney"><img height="20" src="https://secure.gravatar.com/avatar/4cfc9597de4269114d9457d02c5a57a5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jdalton" href="/documentcloud/underscore/commits/master/underscore.js?author=jdalton"><img height="20" src="https://secure.gravatar.com/avatar/299a3d891ff1920b69c364d061007043?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="michaelficarra" href="/documentcloud/underscore/commits/master/underscore.js?author=michaelficarra"><img height="20" src="https://secure.gravatar.com/avatar/24fb0088507077f7852adaec4f6b679f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="iamnoah" href="/documentcloud/underscore/commits/master/underscore.js?author=iamnoah"><img height="20" src="https://secure.gravatar.com/avatar/755ad21d2059ac3970754edd621ba65b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="octatone" href="/documentcloud/underscore/commits/master/underscore.js?author=octatone"><img height="20" src="https://secure.gravatar.com/avatar/cd68bb8250c974ae2ae20570a53ee89f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="AdmCrvn" href="/documentcloud/underscore/commits/master/underscore.js?author=AdmCrvn"><img height="20" src="https://secure.gravatar.com/avatar/f86faf334ae10a0ca61abacd35237edc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="samuelclay" href="/documentcloud/underscore/commits/master/underscore.js?author=samuelclay"><img height="20" src="https://secure.gravatar.com/avatar/623aae0b4533bc1db9ecc20fe9ea4912?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kmalakoff" href="/documentcloud/underscore/commits/master/underscore.js?author=kmalakoff"><img height="20" src="https://secure.gravatar.com/avatar/e01e261ed76aa771af08ad836726e13a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="lifesinger" href="/documentcloud/underscore/commits/master/underscore.js?author=lifesinger"><img height="20" src="https://secure.gravatar.com/avatar/db33090541526c03c798f82aa0a5dbaa?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kitcambridge" href="/documentcloud/underscore/commits/master/underscore.js?author=kitcambridge"><img height="20" src="https://secure.gravatar.com/avatar/bb3a685a3b48e5332aeb4cc0a01380c5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jrburke" href="/documentcloud/underscore/commits/master/underscore.js?author=jrburke"><img height="20" src="https://secure.gravatar.com/avatar/00ac28bdce61e7db41be57fb3b7f3525?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jasondavies" href="/documentcloud/underscore/commits/master/underscore.js?author=jasondavies"><img height="20" src="https://secure.gravatar.com/avatar/f9dd9f4c2b8d081b67fe34769e24808e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="int3" href="/documentcloud/underscore/commits/master/underscore.js?author=int3"><img height="20" src="https://secure.gravatar.com/avatar/b20430514c8c4c4c161c51e128f1a7e2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="caseywebdev" href="/documentcloud/underscore/commits/master/underscore.js?author=caseywebdev"><img height="20" src="https://secure.gravatar.com/avatar/ca34681a45aff25c58c7c5ce9a8b0a32?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tonylukasavage" href="/documentcloud/underscore/commits/master/underscore.js?author=tonylukasavage"><img height="20" src="https://secure.gravatar.com/avatar/39ebccd822b6fb533e004ee722c38e9d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mcmire" href="/documentcloud/underscore/commits/master/underscore.js?author=mcmire"><img height="20" src="https://secure.gravatar.com/avatar/e9e852b18079792bc5f4ec52b8e37c53?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="spadgos" href="/documentcloud/underscore/commits/master/underscore.js?author=spadgos"><img height="20" src="https://secure.gravatar.com/avatar/f092dfd45793e9483281d4205b674823?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="janraasch" href="/documentcloud/underscore/commits/master/underscore.js?author=janraasch"><img height="20" src="https://secure.gravatar.com/avatar/f319df404fa1f19916b153a20ae7715c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="malclocke" href="/documentcloud/underscore/commits/master/underscore.js?author=malclocke"><img height="20" src="https://secure.gravatar.com/avatar/d01b85a507aadb79d402e5efd1aa651f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ansman" href="/documentcloud/underscore/commits/master/underscore.js?author=ansman"><img height="20" src="https://secure.gravatar.com/avatar/6e1b4fb1960b220515c1673b728b3794?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mwilliamson" href="/documentcloud/underscore/commits/master/underscore.js?author=mwilliamson"><img height="20" src="https://secure.gravatar.com/avatar/440512e6a49b5310494ecafefe37724f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mhansen" href="/documentcloud/underscore/commits/master/underscore.js?author=mhansen"><img height="20" src="https://secure.gravatar.com/avatar/97c7cb70d1f6c24b47aa9ad809cb2c25?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="markstory" href="/documentcloud/underscore/commits/master/underscore.js?author=markstory"><img height="20" src="https://secure.gravatar.com/avatar/669144d1ab0a861af5d54175371bc586?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>

      <a href="#blob_contributors_box" rel="facebox" class="others-text">and others.</a>

    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/32652ed5b8fbd2ecdb1c78e9ac567b4b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jashkenas">jashkenas</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/0168f51cd822a820c606c259b80e253f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/braddunbar">braddunbar</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b6acfba347fcefa47942e2e95ba4d5bc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/ratbeard">ratbeard</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/4cfc9597de4269114d9457d02c5a57a5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/ryantenney">ryantenney</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/299a3d891ff1920b69c364d061007043?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jdalton">jdalton</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/24fb0088507077f7852adaec4f6b679f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/michaelficarra">michaelficarra</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/755ad21d2059ac3970754edd621ba65b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/iamnoah">iamnoah</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/cd68bb8250c974ae2ae20570a53ee89f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/octatone">octatone</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f86faf334ae10a0ca61abacd35237edc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/AdmCrvn">AdmCrvn</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/623aae0b4533bc1db9ecc20fe9ea4912?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/samuelclay">samuelclay</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/e01e261ed76aa771af08ad836726e13a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/kmalakoff">kmalakoff</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/db33090541526c03c798f82aa0a5dbaa?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/lifesinger">lifesinger</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bb3a685a3b48e5332aeb4cc0a01380c5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/kitcambridge">kitcambridge</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/00ac28bdce61e7db41be57fb3b7f3525?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jrburke">jrburke</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f9dd9f4c2b8d081b67fe34769e24808e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jasondavies">jasondavies</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b20430514c8c4c4c161c51e128f1a7e2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/int3">int3</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/ca34681a45aff25c58c7c5ce9a8b0a32?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/caseywebdev">caseywebdev</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/39ebccd822b6fb533e004ee722c38e9d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/tonylukasavage">tonylukasavage</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/e9e852b18079792bc5f4ec52b8e37c53?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mcmire">mcmire</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f092dfd45793e9483281d4205b674823?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/spadgos">spadgos</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f319df404fa1f19916b153a20ae7715c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/janraasch">janraasch</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d01b85a507aadb79d402e5efd1aa651f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/malclocke">malclocke</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/6e1b4fb1960b220515c1673b728b3794?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/ansman">ansman</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/440512e6a49b5310494ecafefe37724f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mwilliamson">mwilliamson</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/97c7cb70d1f6c24b47aa9ad809cb2c25?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mhansen">mhansen</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/669144d1ab0a861af5d54175371bc586?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/markstory">markstory</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/920e96e39bf30400e9bc7c4a92b1bf00?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mrjjwright">mrjjwright</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/6d7ed50c6225d607f4653cb14a2ce528?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/limeblack">limeblack</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2922f1fa46e9ca9b70eee958ddcc1704?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/shesek">shesek</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/40de52a01e73819462ef8fdc924a4d3c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/lennym">lennym</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5211ea711bb06482530172f77732f61a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/shama">shama</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/3c6753e1e589735a0a3a6d417d9553cd?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/kriskowal">kriskowal</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/6c51c14716e24bc1f1a3fb5ad234e773?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/kjbekkelund">kjbekkelund</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/dea31f1e80cb4ec53d1e9a7135192d59?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/hx">hx</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/132e1aa89b96190de8f4ce6569ebb321?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/kevinoid">kevinoid</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/0db2fd6ad7f95628b69af69f214d3cc3?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/kapooostin">kapooostin</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/7c753fa710877b55f7596b47f5a554b1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/nickstenning">nickstenning</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bbe5dc8dcf248706525ab76f46185520?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/josh">josh</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/df93bdbaaf88550ea285080c3091a3c1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mikez302">mikez302</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/cfac4fc60b4e72258138903daab65b44?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/ded">ded</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/664570a7fab31d289062c87adfc8daea?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/albemuth">albemuth</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2ac28b22a3596136ad31d53553383d9b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/petejkim">petejkim</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/fc40b1fe79ea6b10825141d86f767354?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/yuchi">yuchi</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/fd06cefb959e4e9dfefb35621f4a993e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/ryanve">ryanve</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/eeb96ccb9534c7bed6c0dccd4e4f0e5b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/npcode">npcode</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5415725875ebac1064e0e979ab149607?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/taiju">taiju</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/fe8fb19a16d6f2304747ca337ad3a8f1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/wachunga">wachunga</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c7d821986a42c48aff6c10fc030b36bf?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/glasser">glasser</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/fbf7977917910666bea05c3ca3c9f2cf?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/sgentle">sgentle</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/0e815006aef4a0e79d60df31b654648c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/Stuk">Stuk</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b7944342848e4dfee634291c2a58b955?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/fredericksgary">fredericksgary</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/ac8a5e8739b75bda6567a4630b91dd82?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/subzey">subzey</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/ca0a29bff44745fb49664b108e29b176?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/chaoflow">chaoflow</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b1e65792c33ab7d44028dd0918e92d16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/rfletcher">rfletcher</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/12789341e72ebbc7f46720c4c13739d5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/fawek">fawek</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d85ffb0d167de05d50b33c3889e8a227?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/TalAter">TalAter</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c953ddd239707998340e1a6fbb3eeb46?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/creationix">creationix</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/679a33ec2ceb2195591888496d287df8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/DmitryBaranovskiy">DmitryBaranovskiy</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5e5964a730879969fc63a849f022590a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/tillberg">tillberg</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/0b64b1fd4310148fdb121698cbf58960?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/colinta">colinta</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/ffa6eed1e8a9c1b2adb37ca88c07dede?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/chrisleishman">chrisleishman</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/7b72d5a18ab92129692e97a76a153fe0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jed">jed</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/10610a774494efbb8f8ca5c7a3f33da4?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/bryanwoods">bryanwoods</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/3a58bc7aefaa7a7b07d6311396a35e05?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/bmaland">bmaland</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/97e29ccac35f946650ecc9a67710fe07?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/chris-baynes">chris-baynes</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5af2930e39246c8339fa7ad8e394e96e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/aseemk">aseemk</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/403a6bcf6c06f2694b635a5f108c7101?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/arlolra">arlolra</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/1ac5a00efa41cd58c421d3cd98dda7b9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/gsamokovarov">gsamokovarov</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f3e64d7e337eb79b66c7110ba5113f07?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/JeffAMcGee">JeffAMcGee</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/80aa84dfe6098634c389e7042a34eaa7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/albertsun">albertsun</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/documentcloud/underscore/blob/48e373a522bb98802154a0fa0e517051fca61a33/underscore.js" data-title="underscore/underscore.js at master · documentcloud/underscore · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>1238 lines (1101 sloc)</span>
                <span>41.901 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/documentcloud/underscore/edit/master/underscore.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/documentcloud/underscore/raw/master/underscore.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/documentcloud/underscore/blame/master/underscore.js" class="button minibutton ">Blame</a>
                  <a href="/documentcloud/underscore/commits/master/underscore.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">//     Underscore.js 1.4.4</span></div><div class='line' id='LC2'><span class="c1">//     http://underscorejs.org</span></div><div class='line' id='LC3'><span class="c1">//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.</span></div><div class='line' id='LC4'><span class="c1">//     Underscore may be freely distributed under the MIT license.</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'>&nbsp;&nbsp;<span class="c1">// Baseline setup</span></div><div class='line' id='LC9'>&nbsp;&nbsp;<span class="c1">// --------------</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'>&nbsp;&nbsp;<span class="c1">// Establish the root object, `window` in the browser, or `global` on the server.</span></div><div class='line' id='LC12'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">root</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="c1">// Save the previous value of the `_` variable.</span></div><div class='line' id='LC15'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">previousUnderscore</span> <span class="o">=</span> <span class="nx">root</span><span class="p">.</span><span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>&nbsp;&nbsp;<span class="c1">// Establish the object that gets returned to break out of a loop iteration.</span></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">breaker</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>&nbsp;&nbsp;<span class="c1">// Save bytes in the minified (but not gzipped) version:</span></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ArrayProto</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">ObjProto</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">FuncProto</span> <span class="o">=</span> <span class="nb">Function</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="c1">// Create quick reference variables for speed access to core prototypes.</span></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">push</span>             <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">push</span><span class="p">,</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">slice</span>            <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">slice</span><span class="p">,</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">concat</span>           <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">concat</span><span class="p">,</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toString</span>         <span class="o">=</span> <span class="nx">ObjProto</span><span class="p">.</span><span class="nx">toString</span><span class="p">,</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hasOwnProperty</span>   <span class="o">=</span> <span class="nx">ObjProto</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">;</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'>&nbsp;&nbsp;<span class="c1">// All **ECMAScript 5** native function implementations that we hope to use</span></div><div class='line' id='LC31'>&nbsp;&nbsp;<span class="c1">// are declared here.</span></div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="kd">var</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeForEach</span>      <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">forEach</span><span class="p">,</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeMap</span>          <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">map</span><span class="p">,</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeReduce</span>       <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">reduce</span><span class="p">,</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeReduceRight</span>  <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">reduceRight</span><span class="p">,</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeFilter</span>       <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">filter</span><span class="p">,</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeEvery</span>        <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">every</span><span class="p">,</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeSome</span>         <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">some</span><span class="p">,</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeIndexOf</span>      <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">,</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeLastIndexOf</span>  <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">,</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeIsArray</span>      <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">,</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeKeys</span>         <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">,</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeBind</span>         <span class="o">=</span> <span class="nx">FuncProto</span><span class="p">.</span><span class="nx">bind</span><span class="p">;</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="c1">// Create a safe reference to the Underscore object for use below.</span></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="k">instanceof</span> <span class="nx">_</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">this</span> <span class="k">instanceof</span> <span class="nx">_</span><span class="p">))</span> <span class="k">return</span> <span class="k">new</span> <span class="nx">_</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="c1">// Export the Underscore object for **Node.js**, with</span></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="c1">// backwards-compatibility for the old `require()` API. If we&#39;re in</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="c1">// the browser, add `_` as a global object via a string identifier,</span></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="c1">// for Closure Compiler &quot;advanced&quot; mode.</span></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span> <span class="o">=</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">_</span> <span class="o">=</span> <span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC62'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">root</span><span class="p">.</span><span class="nx">_</span> <span class="o">=</span> <span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC64'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>&nbsp;&nbsp;<span class="c1">// Current version.</span></div><div class='line' id='LC67'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">VERSION</span> <span class="o">=</span> <span class="s1">&#39;1.4.4&#39;</span><span class="p">;</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>&nbsp;&nbsp;<span class="c1">// Collection Functions</span></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="c1">// --------------------</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>&nbsp;&nbsp;<span class="c1">// The cornerstone, an `each` implementation, aka `forEach`.</span></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="c1">// Handles objects with the built-in `forEach`, arrays, and raw objects.</span></div><div class='line' id='LC74'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `forEach` if available.</span></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">each</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">each</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">forEach</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeForEach</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">forEach</span> <span class="o">===</span> <span class="nx">nativeForEach</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="o">+</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">obj</span><span class="p">)</span> <span class="o">===</span> <span class="nx">breaker</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">obj</span><span class="p">)</span> <span class="o">===</span> <span class="nx">breaker</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC90'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>&nbsp;&nbsp;<span class="c1">// Return the results of applying the iterator to each element.</span></div><div class='line' id='LC93'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `map` if available.</span></div><div class='line' id='LC94'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">map</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">collect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeMap</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">map</span> <span class="o">===</span> <span class="nx">nativeMap</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">results</span><span class="p">[</span><span class="nx">results</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">);</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC102'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">reduceError</span> <span class="o">=</span> <span class="s1">&#39;Reduce of empty array with no initial value&#39;</span><span class="p">;</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>&nbsp;&nbsp;<span class="c1">// **Reduce** builds up a single result from a list of values, aka `inject`,</span></div><div class='line' id='LC107'>&nbsp;&nbsp;<span class="c1">// or `foldl`. Delegates to **ECMAScript 5**&#39;s native `reduce` if available.</span></div><div class='line' id='LC108'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">reduce</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">foldl</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inject</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">initial</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeReduce</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduce</span> <span class="o">===</span> <span class="nx">nativeReduce</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">context</span><span class="p">)</span> <span class="nx">iterator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">initial</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">)</span> <span class="o">:</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span><span class="nx">iterator</span><span class="p">);</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">initial</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initial</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">initial</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">(</span><span class="nx">reduceError</span><span class="p">);</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC125'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>&nbsp;&nbsp;<span class="c1">// The right-associative version of reduce, also known as `foldr`.</span></div><div class='line' id='LC128'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `reduceRight` if available.</span></div><div class='line' id='LC129'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">reduceRight</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">foldr</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">initial</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeReduceRight</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduceRight</span> <span class="o">===</span> <span class="nx">nativeReduceRight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">context</span><span class="p">)</span> <span class="nx">iterator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">initial</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduceRight</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">)</span> <span class="o">:</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduceRight</span><span class="p">(</span><span class="nx">iterator</span><span class="p">);</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">length</span> <span class="o">!==</span> <span class="o">+</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">length</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span> <span class="o">=</span> <span class="nx">keys</span> <span class="o">?</span> <span class="nx">keys</span><span class="p">[</span><span class="o">--</span><span class="nx">length</span><span class="p">]</span> <span class="o">:</span> <span class="o">--</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">initial</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">index</span><span class="p">];</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initial</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">index</span><span class="p">],</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">);</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">initial</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">(</span><span class="nx">reduceError</span><span class="p">);</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC152'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>&nbsp;&nbsp;<span class="c1">// Return the first value which passes a truth test. Aliased as `detect`.</span></div><div class='line' id='LC155'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">find</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">detect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">any</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC164'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>&nbsp;&nbsp;<span class="c1">// Return all the elements that pass a truth test.</span></div><div class='line' id='LC167'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `filter` if available.</span></div><div class='line' id='LC168'>&nbsp;&nbsp;<span class="c1">// Aliased as `select`.</span></div><div class='line' id='LC169'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">filter</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">select</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeFilter</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">filter</span> <span class="o">===</span> <span class="nx">nativeFilter</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">))</span> <span class="nx">results</span><span class="p">[</span><span class="nx">results</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC177'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>&nbsp;&nbsp;<span class="c1">// Return all the elements for which a truth test fails.</span></div><div class='line' id='LC180'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">reject</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">);</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC184'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>&nbsp;&nbsp;<span class="c1">// Determine whether all of the elements match a truth test.</span></div><div class='line' id='LC187'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `every` if available.</span></div><div class='line' id='LC188'>&nbsp;&nbsp;<span class="c1">// Aliased as `all`.</span></div><div class='line' id='LC189'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">every</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">all</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span> <span class="o">||</span> <span class="p">(</span><span class="nx">iterator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeEvery</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">every</span> <span class="o">===</span> <span class="nx">nativeEvery</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">every</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">result</span> <span class="o">&amp;&amp;</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)))</span> <span class="k">return</span> <span class="nx">breaker</span><span class="p">;</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC198'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>&nbsp;&nbsp;<span class="c1">// Determine if at least one element in the object matches a truth test.</span></div><div class='line' id='LC201'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `some` if available.</span></div><div class='line' id='LC202'>&nbsp;&nbsp;<span class="c1">// Aliased as `any`.</span></div><div class='line' id='LC203'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">any</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">some</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">any</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span> <span class="o">||</span> <span class="p">(</span><span class="nx">iterator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeSome</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">some</span> <span class="o">===</span> <span class="nx">nativeSome</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">some</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span> <span class="o">||</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)))</span> <span class="k">return</span> <span class="nx">breaker</span><span class="p">;</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC212'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'>&nbsp;&nbsp;<span class="c1">// Determine if the array or object contains a given value (using `===`).</span></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="c1">// Aliased as `include`.</span></div><div class='line' id='LC216'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">contains</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">include</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeIndexOf</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">===</span> <span class="nx">nativeIndexOf</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">target</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">any</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span> <span class="o">===</span> <span class="nx">target</span><span class="p">;</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC222'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC223'><br/></div><div class='line' id='LC224'>&nbsp;&nbsp;<span class="c1">// Invoke a method (with arguments) on every item in a collection.</span></div><div class='line' id='LC225'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">invoke</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isFunc</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">method</span><span class="p">);</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">isFunc</span> <span class="o">?</span> <span class="nx">method</span> <span class="o">:</span> <span class="nx">value</span><span class="p">[</span><span class="nx">method</span><span class="p">]).</span><span class="nx">apply</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC231'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC232'><br/></div><div class='line' id='LC233'>&nbsp;&nbsp;<span class="c1">// Convenience version of a common use case of `map`: fetching a property.</span></div><div class='line' id='LC234'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">pluck</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">){</span> <span class="k">return</span> <span class="nx">value</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span> <span class="p">});</span></div><div class='line' id='LC236'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>&nbsp;&nbsp;<span class="c1">// Convenience version of a common use case of `filter`: selecting only objects</span></div><div class='line' id='LC239'>&nbsp;&nbsp;<span class="c1">// containing specific `key:value` pairs.</span></div><div class='line' id='LC240'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">where</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">,</span> <span class="nx">first</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span><span class="p">(</span><span class="nx">attrs</span><span class="p">))</span> <span class="k">return</span> <span class="nx">first</span> <span class="o">?</span> <span class="k">void</span> <span class="mi">0</span> <span class="o">:</span> <span class="p">[];</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">[</span><span class="nx">first</span> <span class="o">?</span> <span class="s1">&#39;find&#39;</span> <span class="o">:</span> <span class="s1">&#39;filter&#39;</span><span class="p">](</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">attrs</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">value</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC248'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC249'><br/></div><div class='line' id='LC250'>&nbsp;&nbsp;<span class="c1">// Convenience version of a common use case of `find`: getting the first object</span></div><div class='line' id='LC251'>&nbsp;&nbsp;<span class="c1">// containing specific `key:value` pairs.</span></div><div class='line' id='LC252'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">findWhere</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">where</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC254'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'>&nbsp;&nbsp;<span class="c1">// Return the maximum element or (element-based computation).</span></div><div class='line' id='LC257'>&nbsp;&nbsp;<span class="c1">// Can&#39;t optimize arrays of integers longer than 65,535 elements.</span></div><div class='line' id='LC258'>&nbsp;&nbsp;<span class="c1">// See: https://bugs.webkit.org/show_bug.cgi?id=80797</span></div><div class='line' id='LC259'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">max</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterator</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="o">+</span><span class="nx">obj</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">65535</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nb">Math</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterator</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="o">-</span><span class="kc">Infinity</span><span class="p">;</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{</span><span class="nx">computed</span> <span class="o">:</span> <span class="o">-</span><span class="kc">Infinity</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="o">-</span><span class="kc">Infinity</span><span class="p">};</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">computed</span> <span class="o">=</span> <span class="nx">iterator</span> <span class="o">?</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">computed</span> <span class="o">&gt;=</span> <span class="nx">result</span><span class="p">.</span><span class="nx">computed</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="p">{</span><span class="nx">value</span> <span class="o">:</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">computed</span> <span class="o">:</span> <span class="nx">computed</span><span class="p">});</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC270'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>&nbsp;&nbsp;<span class="c1">// Return the minimum element (or element-based computation).</span></div><div class='line' id='LC273'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">min</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterator</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="o">+</span><span class="nx">obj</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">65535</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nb">Math</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterator</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="kc">Infinity</span><span class="p">;</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{</span><span class="nx">computed</span> <span class="o">:</span> <span class="kc">Infinity</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span> <span class="kc">Infinity</span><span class="p">};</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">computed</span> <span class="o">=</span> <span class="nx">iterator</span> <span class="o">?</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">computed</span> <span class="o">&lt;</span> <span class="nx">result</span><span class="p">.</span><span class="nx">computed</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="p">{</span><span class="nx">value</span> <span class="o">:</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">computed</span> <span class="o">:</span> <span class="nx">computed</span><span class="p">});</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC284'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC285'><br/></div><div class='line' id='LC286'>&nbsp;&nbsp;<span class="c1">// Shuffle an array.</span></div><div class='line' id='LC287'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">shuffle</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rand</span><span class="p">;</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">shuffled</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rand</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">random</span><span class="p">(</span><span class="nx">index</span><span class="o">++</span><span class="p">);</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shuffled</span><span class="p">[</span><span class="nx">index</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">shuffled</span><span class="p">[</span><span class="nx">rand</span><span class="p">];</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shuffled</span><span class="p">[</span><span class="nx">rand</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">shuffled</span><span class="p">;</span></div><div class='line' id='LC297'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC298'><br/></div><div class='line' id='LC299'>&nbsp;&nbsp;<span class="c1">// An internal function to generate lookup iterators.</span></div><div class='line' id='LC300'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">lookupIterator</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">?</span> <span class="nx">value</span> <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">){</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">value</span><span class="p">];</span> <span class="p">};</span></div><div class='line' id='LC302'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>&nbsp;&nbsp;<span class="c1">// Sort the object&#39;s values by a criterion produced by an iterator.</span></div><div class='line' id='LC305'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">sortBy</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">iterator</span> <span class="o">=</span> <span class="nx">lookupIterator</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">pluck</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">:</span> <span class="nx">value</span><span class="p">,</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span> <span class="o">:</span> <span class="nx">index</span><span class="p">,</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">criteria</span> <span class="o">:</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">sort</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">right</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">left</span><span class="p">.</span><span class="nx">criteria</span><span class="p">;</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="nx">right</span><span class="p">.</span><span class="nx">criteria</span><span class="p">;</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">!==</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">&gt;</span> <span class="nx">b</span> <span class="o">||</span> <span class="nx">a</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">)</span> <span class="k">return</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">&lt;</span> <span class="nx">b</span> <span class="o">||</span> <span class="nx">b</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">)</span> <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">left</span><span class="p">.</span><span class="nx">index</span> <span class="o">&lt;</span> <span class="nx">right</span><span class="p">.</span><span class="nx">index</span> <span class="o">?</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}),</span> <span class="s1">&#39;value&#39;</span><span class="p">);</span></div><div class='line' id='LC322'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC323'><br/></div><div class='line' id='LC324'>&nbsp;&nbsp;<span class="c1">// An internal function used for aggregate &quot;group by&quot; operations.</span></div><div class='line' id='LC325'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">group</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">behavior</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">iterator</span> <span class="o">=</span> <span class="nx">lookupIterator</span><span class="p">(</span><span class="nx">value</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span> <span class="o">:</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">behavior</span><span class="p">(</span><span class="nx">result</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC333'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC334'><br/></div><div class='line' id='LC335'>&nbsp;&nbsp;<span class="c1">// Groups the object&#39;s values by a criterion. Pass either a string attribute</span></div><div class='line' id='LC336'>&nbsp;&nbsp;<span class="c1">// to group by, or a function that returns the criterion.</span></div><div class='line' id='LC337'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">groupBy</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">group</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">result</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">result</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">?</span> <span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">:</span> <span class="p">(</span><span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="p">[])).</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC341'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC342'><br/></div><div class='line' id='LC343'>&nbsp;&nbsp;<span class="c1">// Counts instances of an object that group by a certain criterion. Pass</span></div><div class='line' id='LC344'>&nbsp;&nbsp;<span class="c1">// either a string attribute to count by, or a function that returns the</span></div><div class='line' id='LC345'>&nbsp;&nbsp;<span class="c1">// criterion.</span></div><div class='line' id='LC346'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">countBy</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">group</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">result</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">result</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC351'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC352'><br/></div><div class='line' id='LC353'>&nbsp;&nbsp;<span class="c1">// Use a comparator function to figure out the smallest index at which</span></div><div class='line' id='LC354'>&nbsp;&nbsp;<span class="c1">// an object should be inserted so as to maintain order. Uses binary search.</span></div><div class='line' id='LC355'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">sortedIndex</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span> <span class="o">=</span> <span class="nx">iterator</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span> <span class="o">:</span> <span class="nx">lookupIterator</span><span class="p">(</span><span class="nx">iterator</span><span class="p">);</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">low</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">high</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">low</span> <span class="o">&lt;</span> <span class="nx">high</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">mid</span> <span class="o">=</span> <span class="p">(</span><span class="nx">low</span> <span class="o">+</span> <span class="nx">high</span><span class="p">)</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">array</span><span class="p">[</span><span class="nx">mid</span><span class="p">])</span> <span class="o">&lt;</span> <span class="nx">value</span> <span class="o">?</span> <span class="nx">low</span> <span class="o">=</span> <span class="nx">mid</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">high</span> <span class="o">=</span> <span class="nx">mid</span><span class="p">;</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">low</span><span class="p">;</span></div><div class='line' id='LC364'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC365'><br/></div><div class='line' id='LC366'>&nbsp;&nbsp;<span class="c1">// Safely convert anything iterable into a real, live array.</span></div><div class='line' id='LC367'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">toArray</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">obj</span><span class="p">)</span> <span class="k">return</span> <span class="p">[];</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="o">+</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">values</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC372'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC373'><br/></div><div class='line' id='LC374'>&nbsp;&nbsp;<span class="c1">// Return the number of elements in an object.</span></div><div class='line' id='LC375'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">size</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="o">+</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC378'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC379'><br/></div><div class='line' id='LC380'>&nbsp;&nbsp;<span class="c1">// Array Functions</span></div><div class='line' id='LC381'>&nbsp;&nbsp;<span class="c1">// ---------------</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'>&nbsp;&nbsp;<span class="c1">// Get the first element of an array. Passing **n** will return the first N</span></div><div class='line' id='LC384'>&nbsp;&nbsp;<span class="c1">// values in the array. Aliased as `head` and `take`. The **guard** check</span></div><div class='line' id='LC385'>&nbsp;&nbsp;<span class="c1">// allows it to work with `_.map`.</span></div><div class='line' id='LC386'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">first</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">head</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">take</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">n</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">guard</span> <span class="o">?</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span><span class="p">)</span> <span class="o">:</span> <span class="nx">array</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC389'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC390'><br/></div><div class='line' id='LC391'>&nbsp;&nbsp;<span class="c1">// Returns everything but the last entry of the array. Especially useful on</span></div><div class='line' id='LC392'>&nbsp;&nbsp;<span class="c1">// the arguments object. Passing **n** will return all the values in</span></div><div class='line' id='LC393'>&nbsp;&nbsp;<span class="c1">// the array, excluding the last N. The **guard** check allows it to work with</span></div><div class='line' id='LC394'>&nbsp;&nbsp;<span class="c1">// `_.map`.</span></div><div class='line' id='LC395'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">initial</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="p">((</span><span class="nx">n</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">||</span> <span class="nx">guard</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">n</span><span class="p">));</span></div><div class='line' id='LC397'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC398'><br/></div><div class='line' id='LC399'>&nbsp;&nbsp;<span class="c1">// Get the last element of an array. Passing **n** will return the last N</span></div><div class='line' id='LC400'>&nbsp;&nbsp;<span class="c1">// values in the array. The **guard** check allows it to work with `_.map`.</span></div><div class='line' id='LC401'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">last</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">n</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">n</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">array</span><span class="p">[</span><span class="nx">array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC408'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC409'><br/></div><div class='line' id='LC410'>&nbsp;&nbsp;<span class="c1">// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.</span></div><div class='line' id='LC411'>&nbsp;&nbsp;<span class="c1">// Especially useful on the arguments object. Passing an **n** will return</span></div><div class='line' id='LC412'>&nbsp;&nbsp;<span class="c1">// the rest N values in the array. The **guard**</span></div><div class='line' id='LC413'>&nbsp;&nbsp;<span class="c1">// check allows it to work with `_.map`.</span></div><div class='line' id='LC414'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">rest</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">tail</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">drop</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="p">(</span><span class="nx">n</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">||</span> <span class="nx">guard</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">n</span><span class="p">);</span></div><div class='line' id='LC416'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC417'><br/></div><div class='line' id='LC418'>&nbsp;&nbsp;<span class="c1">// Trim out all falsy values from an array.</span></div><div class='line' id='LC419'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">compact</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC421'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC422'><br/></div><div class='line' id='LC423'>&nbsp;&nbsp;<span class="c1">// Internal implementation of a recursive `flatten` function.</span></div><div class='line' id='LC424'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">flatten</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">input</span><span class="p">,</span> <span class="nx">shallow</span><span class="p">,</span> <span class="nx">output</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">input</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shallow</span> <span class="o">?</span> <span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">output</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="o">:</span> <span class="nx">flatten</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">shallow</span><span class="p">,</span> <span class="nx">output</span><span class="p">);</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">output</span><span class="p">;</span></div><div class='line' id='LC433'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC434'><br/></div><div class='line' id='LC435'>&nbsp;&nbsp;<span class="c1">// Return a completely flattened version of an array.</span></div><div class='line' id='LC436'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">flatten</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">shallow</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">flatten</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">shallow</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC438'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC439'><br/></div><div class='line' id='LC440'>&nbsp;&nbsp;<span class="c1">// Return a version of the array that does not contain the specified value(s).</span></div><div class='line' id='LC441'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">without</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">difference</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC443'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC444'><br/></div><div class='line' id='LC445'>&nbsp;&nbsp;<span class="c1">// Produce a duplicate-free version of the array. If the array has already</span></div><div class='line' id='LC446'>&nbsp;&nbsp;<span class="c1">// been sorted, you have the option of using a faster algorithm.</span></div><div class='line' id='LC447'>&nbsp;&nbsp;<span class="c1">// Aliased as `unique`.</span></div><div class='line' id='LC448'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">uniq</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">unique</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">isSorted</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">isSorted</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">;</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span> <span class="o">=</span> <span class="nx">isSorted</span><span class="p">;</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isSorted</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">initial</span> <span class="o">=</span> <span class="nx">iterator</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="o">:</span> <span class="nx">array</span><span class="p">;</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">seen</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">initial</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isSorted</span> <span class="o">?</span> <span class="p">(</span><span class="o">!</span><span class="nx">index</span> <span class="o">||</span> <span class="nx">seen</span><span class="p">[</span><span class="nx">seen</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">value</span><span class="p">)</span> <span class="o">:</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">seen</span><span class="p">,</span> <span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">seen</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">results</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">index</span><span class="p">]);</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC464'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC465'><br/></div><div class='line' id='LC466'>&nbsp;&nbsp;<span class="c1">// Produce an array that contains the union: each distinct element from all of</span></div><div class='line' id='LC467'>&nbsp;&nbsp;<span class="c1">// the passed-in arrays.</span></div><div class='line' id='LC468'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">union</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">uniq</span><span class="p">(</span><span class="nx">concat</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">ArrayProto</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">));</span></div><div class='line' id='LC470'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC471'><br/></div><div class='line' id='LC472'>&nbsp;&nbsp;<span class="c1">// Produce an array that contains every item shared between all the</span></div><div class='line' id='LC473'>&nbsp;&nbsp;<span class="c1">// passed-in arrays.</span></div><div class='line' id='LC474'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">intersection</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rest</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">uniq</span><span class="p">(</span><span class="nx">array</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">every</span><span class="p">(</span><span class="nx">rest</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">other</span><span class="p">,</span> <span class="nx">item</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC481'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC482'><br/></div><div class='line' id='LC483'>&nbsp;&nbsp;<span class="c1">// Take the difference between one array and a number of other arrays.</span></div><div class='line' id='LC484'>&nbsp;&nbsp;<span class="c1">// Only the elements present in just the first array will remain.</span></div><div class='line' id='LC485'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">difference</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rest</span> <span class="o">=</span> <span class="nx">concat</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">ArrayProto</span><span class="p">,</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">){</span> <span class="k">return</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">rest</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC488'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC489'><br/></div><div class='line' id='LC490'>&nbsp;&nbsp;<span class="c1">// Zip together multiple lists into a single array -- elements that share</span></div><div class='line' id='LC491'>&nbsp;&nbsp;<span class="c1">// an index go together.</span></div><div class='line' id='LC492'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">zip</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">pluck</span><span class="p">(</span><span class="nx">args</span><span class="p">,</span> <span class="s1">&#39;length&#39;</span><span class="p">));</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">results</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">pluck</span><span class="p">(</span><span class="nx">args</span><span class="p">,</span> <span class="s2">&quot;&quot;</span> <span class="o">+</span> <span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC500'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC501'><br/></div><div class='line' id='LC502'>&nbsp;&nbsp;<span class="c1">// Converts lists into objects. Pass either a single array of `[key, value]`</span></div><div class='line' id='LC503'>&nbsp;&nbsp;<span class="c1">// pairs, or two parallel arrays of the same length -- one of keys, and one of</span></div><div class='line' id='LC504'>&nbsp;&nbsp;<span class="c1">// the corresponding values.</span></div><div class='line' id='LC505'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">object</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">list</span><span class="p">,</span> <span class="nx">values</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">list</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="p">{};</span></div><div class='line' id='LC507'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">list</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">values</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">list</span><span class="p">[</span><span class="nx">i</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">values</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">list</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">list</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC516'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC517'><br/></div><div class='line' id='LC518'>&nbsp;&nbsp;<span class="c1">// If the browser doesn&#39;t supply us with indexOf (I&#39;m looking at you, **MSIE**),</span></div><div class='line' id='LC519'>&nbsp;&nbsp;<span class="c1">// we need this function. Return the position of the first occurrence of an</span></div><div class='line' id='LC520'>&nbsp;&nbsp;<span class="c1">// item in an array, or -1 if the item is not included in the array.</span></div><div class='line' id='LC521'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `indexOf` if available.</span></div><div class='line' id='LC522'>&nbsp;&nbsp;<span class="c1">// If the array is large and already in sort order, pass `true`</span></div><div class='line' id='LC523'>&nbsp;&nbsp;<span class="c1">// for **isSorted** to use binary search.</span></div><div class='line' id='LC524'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">item</span><span class="p">,</span> <span class="nx">isSorted</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isSorted</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC528'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">isSorted</span> <span class="o">==</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC529'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">i</span> <span class="o">=</span> <span class="p">(</span><span class="nx">isSorted</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">+</span> <span class="nx">isSorted</span><span class="p">)</span> <span class="o">:</span> <span class="nx">isSorted</span><span class="p">);</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">i</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">sortedIndex</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">item</span> <span class="o">?</span> <span class="nx">i</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeIndexOf</span> <span class="o">&amp;&amp;</span> <span class="nx">array</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">===</span> <span class="nx">nativeIndexOf</span><span class="p">)</span> <span class="k">return</span> <span class="nx">array</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">item</span><span class="p">,</span> <span class="nx">isSorted</span><span class="p">);</span></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">item</span><span class="p">)</span> <span class="k">return</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC538'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC539'><br/></div><div class='line' id='LC540'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `lastIndexOf` if available.</span></div><div class='line' id='LC541'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">lastIndexOf</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">item</span><span class="p">,</span> <span class="nx">from</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hasIndex</span> <span class="o">=</span> <span class="nx">from</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeLastIndexOf</span> <span class="o">&amp;&amp;</span> <span class="nx">array</span><span class="p">.</span><span class="nx">lastIndexOf</span> <span class="o">===</span> <span class="nx">nativeLastIndexOf</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">hasIndex</span> <span class="o">?</span> <span class="nx">array</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="nx">item</span><span class="p">,</span> <span class="nx">from</span><span class="p">)</span> <span class="o">:</span> <span class="nx">array</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="p">(</span><span class="nx">hasIndex</span> <span class="o">?</span> <span class="nx">from</span> <span class="o">:</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC548'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">item</span><span class="p">)</span> <span class="k">return</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC550'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC551'><br/></div><div class='line' id='LC552'>&nbsp;&nbsp;<span class="c1">// Generate an integer Array containing an arithmetic progression. A port of</span></div><div class='line' id='LC553'>&nbsp;&nbsp;<span class="c1">// the native Python `range()` function. See</span></div><div class='line' id='LC554'>&nbsp;&nbsp;<span class="c1">// [the Python documentation](http://docs.python.org/library/functions.html#range).</span></div><div class='line' id='LC555'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">range</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">stop</span><span class="p">,</span> <span class="nx">step</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC557'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stop</span> <span class="o">=</span> <span class="nx">start</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC558'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC559'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC560'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">step</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC561'><br/></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">((</span><span class="nx">stop</span> <span class="o">-</span> <span class="nx">start</span><span class="p">)</span> <span class="o">/</span> <span class="nx">step</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC563'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">idx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC564'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">range</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">len</span><span class="p">);</span></div><div class='line' id='LC565'><br/></div><div class='line' id='LC566'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span><span class="p">(</span><span class="nx">idx</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC567'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">range</span><span class="p">[</span><span class="nx">idx</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">start</span><span class="p">;</span></div><div class='line' id='LC568'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span> <span class="o">+=</span> <span class="nx">step</span><span class="p">;</span></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC570'><br/></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">range</span><span class="p">;</span></div><div class='line' id='LC572'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC573'><br/></div><div class='line' id='LC574'>&nbsp;&nbsp;<span class="c1">// Function (ahem) Functions</span></div><div class='line' id='LC575'>&nbsp;&nbsp;<span class="c1">// ------------------</span></div><div class='line' id='LC576'><br/></div><div class='line' id='LC577'>&nbsp;&nbsp;<span class="c1">// Reusable constructor function for prototype setting.</span></div><div class='line' id='LC578'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ctor</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){};</span></div><div class='line' id='LC579'><br/></div><div class='line' id='LC580'>&nbsp;&nbsp;<span class="c1">// Create a function bound to a given object (assigning `this`, and arguments,</span></div><div class='line' id='LC581'>&nbsp;&nbsp;<span class="c1">// optionally). Delegates to **ECMAScript 5**&#39;s native `Function.bind` if</span></div><div class='line' id='LC582'>&nbsp;&nbsp;<span class="c1">// available.</span></div><div class='line' id='LC583'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">bind</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC584'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span><span class="p">,</span> <span class="nx">bound</span><span class="p">;</span></div><div class='line' id='LC585'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">func</span><span class="p">.</span><span class="nx">bind</span> <span class="o">===</span> <span class="nx">nativeBind</span> <span class="o">&amp;&amp;</span> <span class="nx">nativeBind</span><span class="p">)</span> <span class="k">return</span> <span class="nx">nativeBind</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC586'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">func</span><span class="p">))</span> <span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">;</span></div><div class='line' id='LC587'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC588'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">bound</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC589'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">this</span> <span class="k">instanceof</span> <span class="nx">bound</span><span class="p">))</span> <span class="k">return</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)));</span></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctor</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC591'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ctor</span><span class="p">;</span></div><div class='line' id='LC592'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctor</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">args</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)));</span></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="o">===</span> <span class="nx">result</span><span class="p">)</span> <span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">;</span></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC597'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC598'><br/></div><div class='line' id='LC599'>&nbsp;&nbsp;<span class="c1">// Partially apply a function by creating a version that has had some of its</span></div><div class='line' id='LC600'>&nbsp;&nbsp;<span class="c1">// arguments pre-filled, without changing its dynamic `this` context.</span></div><div class='line' id='LC601'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">partial</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC602'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC603'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC604'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)));</span></div><div class='line' id='LC605'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC606'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC607'><br/></div><div class='line' id='LC608'>&nbsp;&nbsp;<span class="c1">// Bind all of an object&#39;s methods to that object. Useful for ensuring that</span></div><div class='line' id='LC609'>&nbsp;&nbsp;<span class="c1">// all callbacks defined on an object belong to it.</span></div><div class='line' id='LC610'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">bindAll</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC611'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">funcs</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC612'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">funcs</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;bindAll must be passed function names&quot;</span><span class="p">);</span></div><div class='line' id='LC613'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">funcs</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">f</span><span class="p">)</span> <span class="p">{</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">f</span><span class="p">],</span> <span class="nx">obj</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC614'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC615'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC616'><br/></div><div class='line' id='LC617'>&nbsp;&nbsp;<span class="c1">// Memoize an expensive function by storing its results.</span></div><div class='line' id='LC618'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">memoize</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">hasher</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC619'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">memo</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC620'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hasher</span> <span class="o">||</span> <span class="p">(</span><span class="nx">hasher</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC621'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC622'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">hasher</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC623'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">memo</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">?</span> <span class="nx">memo</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">:</span> <span class="p">(</span><span class="nx">memo</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">));</span></div><div class='line' id='LC624'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC625'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC626'><br/></div><div class='line' id='LC627'>&nbsp;&nbsp;<span class="c1">// Delays a function for the given number of milliseconds, and then calls</span></div><div class='line' id='LC628'>&nbsp;&nbsp;<span class="c1">// it with the arguments supplied.</span></div><div class='line' id='LC629'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">delay</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="k">return</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span> <span class="p">},</span> <span class="nx">wait</span><span class="p">);</span></div><div class='line' id='LC632'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC633'><br/></div><div class='line' id='LC634'>&nbsp;&nbsp;<span class="c1">// Defers a function, scheduling it to run after the current call stack has</span></div><div class='line' id='LC635'>&nbsp;&nbsp;<span class="c1">// cleared.</span></div><div class='line' id='LC636'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">defer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC637'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">delay</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="p">[</span><span class="nx">func</span><span class="p">,</span> <span class="mi">1</span><span class="p">].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">)));</span></div><div class='line' id='LC638'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC639'><br/></div><div class='line' id='LC640'>&nbsp;&nbsp;<span class="c1">// Returns a function, that, when invoked, will only be triggered at most once</span></div><div class='line' id='LC641'>&nbsp;&nbsp;<span class="c1">// during a given window of time.</span></div><div class='line' id='LC642'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">throttle</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC643'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">,</span> <span class="nx">timeout</span><span class="p">,</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC644'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">previous</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC645'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">later</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC646'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">previous</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">;</span></div><div class='line' id='LC647'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC648'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC649'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC650'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC651'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">now</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">;</span></div><div class='line' id='LC652'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">remaining</span> <span class="o">=</span> <span class="nx">wait</span> <span class="o">-</span> <span class="p">(</span><span class="nx">now</span> <span class="o">-</span> <span class="nx">previous</span><span class="p">);</span></div><div class='line' id='LC653'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC654'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC655'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">remaining</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC656'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC657'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC658'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">previous</span> <span class="o">=</span> <span class="nx">now</span><span class="p">;</span></div><div class='line' id='LC659'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC660'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">timeout</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC661'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">later</span><span class="p">,</span> <span class="nx">remaining</span><span class="p">);</span></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC665'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC666'><br/></div><div class='line' id='LC667'>&nbsp;&nbsp;<span class="c1">// Returns a function, that, as long as it continues to be invoked, will not</span></div><div class='line' id='LC668'>&nbsp;&nbsp;<span class="c1">// be triggered. The function will be called after it stops being called for</span></div><div class='line' id='LC669'>&nbsp;&nbsp;<span class="c1">// N milliseconds. If `immediate` is passed, trigger the function on the</span></div><div class='line' id='LC670'>&nbsp;&nbsp;<span class="c1">// leading edge, instead of the trailing.</span></div><div class='line' id='LC671'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">debounce</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">,</span> <span class="nx">immediate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC672'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">timeout</span><span class="p">,</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC673'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">later</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC676'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC677'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">immediate</span><span class="p">)</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC678'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC679'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">callNow</span> <span class="o">=</span> <span class="nx">immediate</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">timeout</span><span class="p">;</span></div><div class='line' id='LC680'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC681'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">later</span><span class="p">,</span> <span class="nx">wait</span><span class="p">);</span></div><div class='line' id='LC682'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">callNow</span><span class="p">)</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC683'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC684'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC685'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC686'><br/></div><div class='line' id='LC687'>&nbsp;&nbsp;<span class="c1">// Returns a function that will be executed at most one time, no matter how</span></div><div class='line' id='LC688'>&nbsp;&nbsp;<span class="c1">// often you call it. Useful for lazy initialization.</span></div><div class='line' id='LC689'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">once</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC690'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ran</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC691'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC692'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ran</span><span class="p">)</span> <span class="k">return</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC693'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ran</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC694'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC695'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">func</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC696'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC697'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC698'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC699'><br/></div><div class='line' id='LC700'>&nbsp;&nbsp;<span class="c1">// Returns the first function passed as an argument to the second,</span></div><div class='line' id='LC701'>&nbsp;&nbsp;<span class="c1">// allowing you to adjust arguments, run code before and after, and</span></div><div class='line' id='LC702'>&nbsp;&nbsp;<span class="c1">// conditionally execute the original function.</span></div><div class='line' id='LC703'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">wrap</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wrapper</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC704'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC705'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="p">[</span><span class="nx">func</span><span class="p">];</span></div><div class='line' id='LC706'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">args</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC707'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">wrapper</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC708'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC709'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC710'><br/></div><div class='line' id='LC711'>&nbsp;&nbsp;<span class="c1">// Returns a function that is the composition of a list of functions, each</span></div><div class='line' id='LC712'>&nbsp;&nbsp;<span class="c1">// consuming the return value of the function that follows.</span></div><div class='line' id='LC713'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">compose</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC714'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">funcs</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC715'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC716'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC717'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">funcs</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC718'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span> <span class="o">=</span> <span class="p">[</span><span class="nx">funcs</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">)];</span></div><div class='line' id='LC719'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC720'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">args</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC721'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC722'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC723'><br/></div><div class='line' id='LC724'>&nbsp;&nbsp;<span class="c1">// Returns a function that will only be executed after being called N times.</span></div><div class='line' id='LC725'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">after</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">times</span><span class="p">,</span> <span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC726'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">times</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="k">return</span> <span class="nx">func</span><span class="p">();</span></div><div class='line' id='LC727'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC728'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">--</span><span class="nx">times</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC729'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC730'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC731'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC732'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC733'><br/></div><div class='line' id='LC734'>&nbsp;&nbsp;<span class="c1">// Object Functions</span></div><div class='line' id='LC735'>&nbsp;&nbsp;<span class="c1">// ----------------</span></div><div class='line' id='LC736'><br/></div><div class='line' id='LC737'>&nbsp;&nbsp;<span class="c1">// Retrieve the names of an object&#39;s properties.</span></div><div class='line' id='LC738'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `Object.keys`</span></div><div class='line' id='LC739'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">keys</span> <span class="o">=</span> <span class="nx">nativeKeys</span> <span class="o">||</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC740'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">!==</span> <span class="nb">Object</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">(</span><span class="s1">&#39;Invalid object&#39;</span><span class="p">);</span></div><div class='line' id='LC741'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC742'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="nx">keys</span><span class="p">[</span><span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">]</span> <span class="o">=</span> <span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC743'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">keys</span><span class="p">;</span></div><div class='line' id='LC744'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC745'><br/></div><div class='line' id='LC746'>&nbsp;&nbsp;<span class="c1">// Retrieve the values of an object&#39;s properties.</span></div><div class='line' id='LC747'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">values</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC748'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">values</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC749'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="nx">values</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">]);</span></div><div class='line' id='LC750'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">values</span><span class="p">;</span></div><div class='line' id='LC751'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC752'><br/></div><div class='line' id='LC753'>&nbsp;&nbsp;<span class="c1">// Convert an object into a list of `[key, value]` pairs.</span></div><div class='line' id='LC754'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">pairs</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC755'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pairs</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC756'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="nx">pairs</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">key</span><span class="p">,</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">]]);</span></div><div class='line' id='LC757'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">pairs</span><span class="p">;</span></div><div class='line' id='LC758'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC759'><br/></div><div class='line' id='LC760'>&nbsp;&nbsp;<span class="c1">// Invert the keys and values of an object. The values must be serializable.</span></div><div class='line' id='LC761'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">invert</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC762'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC763'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="nx">result</span><span class="p">[</span><span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC764'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC765'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC766'><br/></div><div class='line' id='LC767'>&nbsp;&nbsp;<span class="c1">// Return a sorted list of the function names available on the object.</span></div><div class='line' id='LC768'>&nbsp;&nbsp;<span class="c1">// Aliased as `methods`</span></div><div class='line' id='LC769'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">functions</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">methods</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC770'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">names</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC771'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC772'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">]))</span> <span class="nx">names</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC773'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC774'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">names</span><span class="p">.</span><span class="nx">sort</span><span class="p">();</span></div><div class='line' id='LC775'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC776'><br/></div><div class='line' id='LC777'>&nbsp;&nbsp;<span class="c1">// Extend a given object with all the properties in passed-in object(s).</span></div><div class='line' id='LC778'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC779'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC780'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC781'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">prop</span> <span class="k">in</span> <span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC782'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">source</span><span class="p">[</span><span class="nx">prop</span><span class="p">];</span></div><div class='line' id='LC783'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC784'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC785'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC786'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC787'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC788'><br/></div><div class='line' id='LC789'>&nbsp;&nbsp;<span class="c1">// Return a copy of the object only containing the whitelisted properties.</span></div><div class='line' id='LC790'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">pick</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC791'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">copy</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC792'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">concat</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">ArrayProto</span><span class="p">,</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC793'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">keys</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC794'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="nx">copy</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC795'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC796'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">copy</span><span class="p">;</span></div><div class='line' id='LC797'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC798'><br/></div><div class='line' id='LC799'>&nbsp;&nbsp;&nbsp;<span class="c1">// Return a copy of the object without the blacklisted properties.</span></div><div class='line' id='LC800'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">omit</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC801'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">copy</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC802'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">concat</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">ArrayProto</span><span class="p">,</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC803'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC804'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">keys</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="nx">copy</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC805'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC806'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">copy</span><span class="p">;</span></div><div class='line' id='LC807'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC808'><br/></div><div class='line' id='LC809'>&nbsp;&nbsp;<span class="c1">// Fill in a given object with default properties.</span></div><div class='line' id='LC810'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC811'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC812'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC813'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">prop</span> <span class="k">in</span> <span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC814'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">source</span><span class="p">[</span><span class="nx">prop</span><span class="p">];</span></div><div class='line' id='LC815'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC816'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC817'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC818'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC819'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC820'><br/></div><div class='line' id='LC821'>&nbsp;&nbsp;<span class="c1">// Create a (shallow-cloned) duplicate of an object.</span></div><div class='line' id='LC822'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">clone</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC823'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC824'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">slice</span><span class="p">()</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC825'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC826'><br/></div><div class='line' id='LC827'>&nbsp;&nbsp;<span class="c1">// Invokes interceptor with the obj, and then returns obj.</span></div><div class='line' id='LC828'>&nbsp;&nbsp;<span class="c1">// The primary purpose of this method is to &quot;tap into&quot; a method chain, in</span></div><div class='line' id='LC829'>&nbsp;&nbsp;<span class="c1">// order to perform operations on intermediate results within the chain.</span></div><div class='line' id='LC830'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">tap</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">interceptor</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC831'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">interceptor</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC832'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC833'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC834'><br/></div><div class='line' id='LC835'>&nbsp;&nbsp;<span class="c1">// Internal recursive comparison function for `isEqual`.</span></div><div class='line' id='LC836'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">eq</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">aStack</span><span class="p">,</span> <span class="nx">bStack</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC837'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Identical objects are equal. `0 === -0`, but they aren&#39;t identical.</span></div><div class='line' id='LC838'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.</span></div><div class='line' id='LC839'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">===</span> <span class="nx">b</span><span class="p">)</span> <span class="k">return</span> <span class="nx">a</span> <span class="o">!==</span> <span class="mi">0</span> <span class="o">||</span> <span class="mi">1</span> <span class="o">/</span> <span class="nx">a</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">/</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC840'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// A strict comparison is necessary because `null == undefined`.</span></div><div class='line' id='LC841'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">b</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">a</span> <span class="o">===</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC842'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Unwrap any wrapped objects.</span></div><div class='line' id='LC843'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="k">instanceof</span> <span class="nx">_</span><span class="p">)</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">;</span></div><div class='line' id='LC844'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">b</span> <span class="k">instanceof</span> <span class="nx">_</span><span class="p">)</span> <span class="nx">b</span> <span class="o">=</span> <span class="nx">b</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">;</span></div><div class='line' id='LC845'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Compare `[[Class]]` names.</span></div><div class='line' id='LC846'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">className</span> <span class="o">=</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC847'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">className</span> <span class="o">!=</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">b</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC848'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">className</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC849'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Strings, numbers, dates, and booleans are compared by value.</span></div><div class='line' id='LC850'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object String]&#39;</span><span class="o">:</span></div><div class='line' id='LC851'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Primitives and their corresponding object wrappers are equivalent; thus, `&quot;5&quot;` is</span></div><div class='line' id='LC852'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// equivalent to `new String(&quot;5&quot;)`.</span></div><div class='line' id='LC853'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span> <span class="o">==</span> <span class="nb">String</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC854'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object Number]&#39;</span><span class="o">:</span></div><div class='line' id='LC855'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for</span></div><div class='line' id='LC856'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// other numeric values.</span></div><div class='line' id='LC857'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span> <span class="o">!=</span> <span class="o">+</span><span class="nx">a</span> <span class="o">?</span> <span class="nx">b</span> <span class="o">!=</span> <span class="o">+</span><span class="nx">b</span> <span class="o">:</span> <span class="p">(</span><span class="nx">a</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">/</span> <span class="nx">a</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">/</span> <span class="nx">b</span> <span class="o">:</span> <span class="nx">a</span> <span class="o">==</span> <span class="o">+</span><span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC858'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object Date]&#39;</span><span class="o">:</span></div><div class='line' id='LC859'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object Boolean]&#39;</span><span class="o">:</span></div><div class='line' id='LC860'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Coerce dates and booleans to numeric primitive values. Dates are compared by their</span></div><div class='line' id='LC861'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// millisecond representations. Note that invalid dates with millisecond representations</span></div><div class='line' id='LC862'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// of `NaN` are not equivalent.</span></div><div class='line' id='LC863'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">+</span><span class="nx">a</span> <span class="o">==</span> <span class="o">+</span><span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC864'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// RegExps are compared by their source patterns and flags.</span></div><div class='line' id='LC865'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object RegExp]&#39;</span><span class="o">:</span></div><div class='line' id='LC866'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">source</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">source</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC867'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">global</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">global</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC868'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">multiline</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">multiline</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC869'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">ignoreCase</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">ignoreCase</span><span class="p">;</span></div><div class='line' id='LC870'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC871'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">a</span> <span class="o">!=</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">b</span> <span class="o">!=</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC872'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Assume equality for cyclic structures. The algorithm for detecting cyclic</span></div><div class='line' id='LC873'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.</span></div><div class='line' id='LC874'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">aStack</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC875'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">length</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC876'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Linear search. Performance is inversely proportional to the number of</span></div><div class='line' id='LC877'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// unique nested structures.</span></div><div class='line' id='LC878'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">aStack</span><span class="p">[</span><span class="nx">length</span><span class="p">]</span> <span class="o">==</span> <span class="nx">a</span><span class="p">)</span> <span class="k">return</span> <span class="nx">bStack</span><span class="p">[</span><span class="nx">length</span><span class="p">]</span> <span class="o">==</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC879'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC880'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add the first object to the stack of traversed objects.</span></div><div class='line' id='LC881'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">aStack</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC882'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bStack</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC883'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC884'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Recursively compare objects and arrays.</span></div><div class='line' id='LC885'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">className</span> <span class="o">==</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC886'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Compare array lengths to determine if a deep comparison is necessary.</span></div><div class='line' id='LC887'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">size</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC888'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">size</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC889'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC890'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Deep compare the contents, ignoring non-numeric properties.</span></div><div class='line' id='LC891'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">size</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC892'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">eq</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">size</span><span class="p">],</span> <span class="nx">b</span><span class="p">[</span><span class="nx">size</span><span class="p">],</span> <span class="nx">aStack</span><span class="p">,</span> <span class="nx">bStack</span><span class="p">)))</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC893'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC894'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC895'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC896'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Objects with different constructors are not equivalent, but `Object`s</span></div><div class='line' id='LC897'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// from different frames are.</span></div><div class='line' id='LC898'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">aCtor</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">constructor</span><span class="p">,</span> <span class="nx">bCtor</span> <span class="o">=</span> <span class="nx">b</span><span class="p">.</span><span class="nx">constructor</span><span class="p">;</span></div><div class='line' id='LC899'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">aCtor</span> <span class="o">!==</span> <span class="nx">bCtor</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">aCtor</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">aCtor</span> <span class="k">instanceof</span> <span class="nx">aCtor</span><span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC900'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">bCtor</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">bCtor</span> <span class="k">instanceof</span> <span class="nx">bCtor</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC901'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC902'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC903'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Deep compare objects.</span></div><div class='line' id='LC904'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC905'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC906'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Count the expected number of properties.</span></div><div class='line' id='LC907'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">size</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC908'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Deep compare each member.</span></div><div class='line' id='LC909'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">eq</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">b</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">aStack</span><span class="p">,</span> <span class="nx">bStack</span><span class="p">)))</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC910'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC911'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC912'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Ensure that both objects contain the same number of properties.</span></div><div class='line' id='LC913'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC914'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC915'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">size</span><span class="o">--</span><span class="p">))</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC916'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC917'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="o">!</span><span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC918'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC919'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC920'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove the first object from the stack of traversed objects.</span></div><div class='line' id='LC921'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">aStack</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC922'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bStack</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC923'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC924'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC925'><br/></div><div class='line' id='LC926'>&nbsp;&nbsp;<span class="c1">// Perform a deep comparison to check if two objects are equal.</span></div><div class='line' id='LC927'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isEqual</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC928'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">eq</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="p">[],</span> <span class="p">[]);</span></div><div class='line' id='LC929'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC930'><br/></div><div class='line' id='LC931'>&nbsp;&nbsp;<span class="c1">// Is a given array, string, or object empty?</span></div><div class='line' id='LC932'>&nbsp;&nbsp;<span class="c1">// An &quot;empty&quot; object has no enumerable own-properties.</span></div><div class='line' id='LC933'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC934'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC935'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC936'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC937'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC938'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC939'><br/></div><div class='line' id='LC940'>&nbsp;&nbsp;<span class="c1">// Is a given value a DOM element?</span></div><div class='line' id='LC941'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isElement</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC942'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">obj</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC943'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC944'><br/></div><div class='line' id='LC945'>&nbsp;&nbsp;<span class="c1">// Is a given value an array?</span></div><div class='line' id='LC946'>&nbsp;&nbsp;<span class="c1">// Delegates to ECMA5&#39;s native Array.isArray</span></div><div class='line' id='LC947'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span> <span class="o">=</span> <span class="nx">nativeIsArray</span> <span class="o">||</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC948'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">;</span></div><div class='line' id='LC949'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC950'><br/></div><div class='line' id='LC951'>&nbsp;&nbsp;<span class="c1">// Is a given variable an object?</span></div><div class='line' id='LC952'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC953'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="nb">Object</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC954'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC955'><br/></div><div class='line' id='LC956'>&nbsp;&nbsp;<span class="c1">// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.</span></div><div class='line' id='LC957'>&nbsp;&nbsp;<span class="nx">each</span><span class="p">([</span><span class="s1">&#39;Arguments&#39;</span><span class="p">,</span> <span class="s1">&#39;Function&#39;</span><span class="p">,</span> <span class="s1">&#39;String&#39;</span><span class="p">,</span> <span class="s1">&#39;Number&#39;</span><span class="p">,</span> <span class="s1">&#39;Date&#39;</span><span class="p">,</span> <span class="s1">&#39;RegExp&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC958'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">[</span><span class="s1">&#39;is&#39;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC959'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object &#39;</span> <span class="o">+</span> <span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">;</span></div><div class='line' id='LC960'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC961'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC962'><br/></div><div class='line' id='LC963'>&nbsp;&nbsp;<span class="c1">// Define a fallback version of the method in browsers (ahem, IE), where</span></div><div class='line' id='LC964'>&nbsp;&nbsp;<span class="c1">// there isn&#39;t any inspectable &quot;Arguments&quot; type.</span></div><div class='line' id='LC965'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArguments</span><span class="p">(</span><span class="nx">arguments</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC966'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isArguments</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC967'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">obj</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;callee&#39;</span><span class="p">));</span></div><div class='line' id='LC968'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC969'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC970'><br/></div><div class='line' id='LC971'>&nbsp;&nbsp;<span class="c1">// Optimize `isFunction` if appropriate.</span></div><div class='line' id='LC972'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="p">(</span><span class="sr">/./</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC973'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC974'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">typeof</span> <span class="nx">obj</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">;</span></div><div class='line' id='LC975'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC976'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC977'><br/></div><div class='line' id='LC978'>&nbsp;&nbsp;<span class="c1">// Is a given object a finite number?</span></div><div class='line' id='LC979'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nb">isFinite</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC980'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">isFinite</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nb">isNaN</span><span class="p">(</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">obj</span><span class="p">));</span></div><div class='line' id='LC981'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC982'><br/></div><div class='line' id='LC983'>&nbsp;&nbsp;<span class="c1">// Is the given value `NaN`? (NaN is the only number which does not equal itself).</span></div><div class='line' id='LC984'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nb">isNaN</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC985'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span> <span class="o">!=</span> <span class="o">+</span><span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC986'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC987'><br/></div><div class='line' id='LC988'>&nbsp;&nbsp;<span class="c1">// Is a given value a boolean?</span></div><div class='line' id='LC989'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isBoolean</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC990'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">||</span> <span class="nx">obj</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">||</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Boolean]&#39;</span><span class="p">;</span></div><div class='line' id='LC991'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC992'><br/></div><div class='line' id='LC993'>&nbsp;&nbsp;<span class="c1">// Is a given value equal to null?</span></div><div class='line' id='LC994'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isNull</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC995'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC996'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC997'><br/></div><div class='line' id='LC998'>&nbsp;&nbsp;<span class="c1">// Is a given variable undefined?</span></div><div class='line' id='LC999'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1000'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1001'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1002'><br/></div><div class='line' id='LC1003'>&nbsp;&nbsp;<span class="c1">// Shortcut function for checking if an object has a given property directly</span></div><div class='line' id='LC1004'>&nbsp;&nbsp;<span class="c1">// on itself (in other words, not on a prototype).</span></div><div class='line' id='LC1005'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">has</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1006'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC1007'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1008'><br/></div><div class='line' id='LC1009'>&nbsp;&nbsp;<span class="c1">// Utility Functions</span></div><div class='line' id='LC1010'>&nbsp;&nbsp;<span class="c1">// -----------------</span></div><div class='line' id='LC1011'><br/></div><div class='line' id='LC1012'>&nbsp;&nbsp;<span class="c1">// Run Underscore.js in *noConflict* mode, returning the `_` variable to its</span></div><div class='line' id='LC1013'>&nbsp;&nbsp;<span class="c1">// previous owner. Returns a reference to the Underscore object.</span></div><div class='line' id='LC1014'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">noConflict</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1015'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">root</span><span class="p">.</span><span class="nx">_</span> <span class="o">=</span> <span class="nx">previousUnderscore</span><span class="p">;</span></div><div class='line' id='LC1016'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1017'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1018'><br/></div><div class='line' id='LC1019'>&nbsp;&nbsp;<span class="c1">// Keep the identity function around for default iterators.</span></div><div class='line' id='LC1020'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">identity</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1021'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1022'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1023'><br/></div><div class='line' id='LC1024'>&nbsp;&nbsp;<span class="c1">// Run a function **n** times.</span></div><div class='line' id='LC1025'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">times</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1026'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">accum</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">n</span><span class="p">);</span></div><div class='line' id='LC1027'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="nx">accum</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC1028'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">accum</span><span class="p">;</span></div><div class='line' id='LC1029'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1030'><br/></div><div class='line' id='LC1031'>&nbsp;&nbsp;<span class="c1">// Return a random integer between min and max (inclusive).</span></div><div class='line' id='LC1032'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">random</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">min</span><span class="p">,</span> <span class="nx">max</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1033'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">max</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1034'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">max</span> <span class="o">=</span> <span class="nx">min</span><span class="p">;</span></div><div class='line' id='LC1035'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">min</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1036'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1037'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">min</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">*</span> <span class="p">(</span><span class="nx">max</span> <span class="o">-</span> <span class="nx">min</span> <span class="o">+</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC1038'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1039'><br/></div><div class='line' id='LC1040'>&nbsp;&nbsp;<span class="c1">// List of HTML entities for escaping.</span></div><div class='line' id='LC1041'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">entityMap</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1042'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">escape</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC1043'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&amp;&#39;</span><span class="o">:</span> <span class="s1">&#39;&amp;amp;&#39;</span><span class="p">,</span></div><div class='line' id='LC1044'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&lt;&#39;</span><span class="o">:</span> <span class="s1">&#39;&amp;lt;&#39;</span><span class="p">,</span></div><div class='line' id='LC1045'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&gt;&#39;</span><span class="o">:</span> <span class="s1">&#39;&amp;gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC1046'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&quot;&#39;</span><span class="o">:</span> <span class="s1">&#39;&amp;quot;&#39;</span><span class="p">,</span></div><div class='line' id='LC1047'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;&#39;&quot;</span><span class="o">:</span> <span class="s1">&#39;&amp;#x27;&#39;</span><span class="p">,</span></div><div class='line' id='LC1048'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;/&#39;</span><span class="o">:</span> <span class="s1">&#39;&amp;#x2F;&#39;</span></div><div class='line' id='LC1049'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1050'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1051'>&nbsp;&nbsp;<span class="nx">entityMap</span><span class="p">.</span><span class="nx">unescape</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">invert</span><span class="p">(</span><span class="nx">entityMap</span><span class="p">.</span><span class="nx">escape</span><span class="p">);</span></div><div class='line' id='LC1052'><br/></div><div class='line' id='LC1053'>&nbsp;&nbsp;<span class="c1">// Regexes containing the keys and values listed immediately above.</span></div><div class='line' id='LC1054'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">entityRegexes</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1055'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">escape</span><span class="o">:</span>   <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;[&#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">entityMap</span><span class="p">.</span><span class="nx">escape</span><span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">,</span> <span class="s1">&#39;g&#39;</span><span class="p">),</span></div><div class='line' id='LC1056'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">unescape</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;(&#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">entityMap</span><span class="p">.</span><span class="nx">unescape</span><span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;|&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">,</span> <span class="s1">&#39;g&#39;</span><span class="p">)</span></div><div class='line' id='LC1057'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1058'><br/></div><div class='line' id='LC1059'>&nbsp;&nbsp;<span class="c1">// Functions for escaping and unescaping strings to/from HTML interpolation.</span></div><div class='line' id='LC1060'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">([</span><span class="s1">&#39;escape&#39;</span><span class="p">,</span> <span class="s1">&#39;unescape&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1061'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">[</span><span class="nx">method</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1062'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">string</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1063'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">string</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="nx">entityRegexes</span><span class="p">[</span><span class="nx">method</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1064'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">entityMap</span><span class="p">[</span><span class="nx">method</span><span class="p">][</span><span class="nx">match</span><span class="p">];</span></div><div class='line' id='LC1065'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1066'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1067'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1068'><br/></div><div class='line' id='LC1069'>&nbsp;&nbsp;<span class="c1">// If the value of the named property is a function then invoke it;</span></div><div class='line' id='LC1070'>&nbsp;&nbsp;<span class="c1">// otherwise, return it.</span></div><div class='line' id='LC1071'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">result</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">object</span><span class="p">,</span> <span class="nx">property</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1072'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">object</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1073'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">object</span><span class="p">[</span><span class="nx">property</span><span class="p">];</span></div><div class='line' id='LC1074'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">?</span> <span class="nx">value</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">object</span><span class="p">)</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1075'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1076'><br/></div><div class='line' id='LC1077'>&nbsp;&nbsp;<span class="c1">// Add your own custom functions to the Underscore object.</span></div><div class='line' id='LC1078'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1079'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">functions</span><span class="p">(</span><span class="nx">obj</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">){</span></div><div class='line' id='LC1080'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">func</span> <span class="o">=</span> <span class="nx">_</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC1081'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1082'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">];</span></div><div class='line' id='LC1083'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">args</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1084'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">args</span><span class="p">));</span></div><div class='line' id='LC1085'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1086'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1087'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1088'><br/></div><div class='line' id='LC1089'>&nbsp;&nbsp;<span class="c1">// Generate a unique integer id (unique within the entire client session).</span></div><div class='line' id='LC1090'>&nbsp;&nbsp;<span class="c1">// Useful for temporary DOM ids.</span></div><div class='line' id='LC1091'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">idCounter</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1092'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">uniqueId</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">prefix</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1093'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="o">++</span><span class="nx">idCounter</span> <span class="o">+</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1094'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">prefix</span> <span class="o">?</span> <span class="nx">prefix</span> <span class="o">+</span> <span class="nx">id</span> <span class="o">:</span> <span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC1095'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1096'><br/></div><div class='line' id='LC1097'>&nbsp;&nbsp;<span class="c1">// By default, Underscore uses ERB-style template delimiters, change the</span></div><div class='line' id='LC1098'>&nbsp;&nbsp;<span class="c1">// following template settings to use alternative delimiters.</span></div><div class='line' id='LC1099'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">templateSettings</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">evaluate</span>    <span class="o">:</span> <span class="sr">/&lt;%([\s\S]+?)%&gt;/g</span><span class="p">,</span></div><div class='line' id='LC1101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">interpolate</span> <span class="o">:</span> <span class="sr">/&lt;%=([\s\S]+?)%&gt;/g</span><span class="p">,</span></div><div class='line' id='LC1102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">escape</span>      <span class="o">:</span> <span class="sr">/&lt;%-([\s\S]+?)%&gt;/g</span></div><div class='line' id='LC1103'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1104'><br/></div><div class='line' id='LC1105'>&nbsp;&nbsp;<span class="c1">// When customizing `templateSettings`, if you don&#39;t want to define an</span></div><div class='line' id='LC1106'>&nbsp;&nbsp;<span class="c1">// interpolation, evaluation or escaping regex, we need one that is</span></div><div class='line' id='LC1107'>&nbsp;&nbsp;<span class="c1">// guaranteed not to match.</span></div><div class='line' id='LC1108'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">noMatch</span> <span class="o">=</span> <span class="sr">/(.)^/</span><span class="p">;</span></div><div class='line' id='LC1109'><br/></div><div class='line' id='LC1110'>&nbsp;&nbsp;<span class="c1">// Certain characters need to be escaped so that they can be put into a</span></div><div class='line' id='LC1111'>&nbsp;&nbsp;<span class="c1">// string literal.</span></div><div class='line' id='LC1112'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">escapes</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;&#39;&quot;</span><span class="o">:</span>      <span class="s2">&quot;&#39;&quot;</span><span class="p">,</span></div><div class='line' id='LC1114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\\&#39;</span><span class="o">:</span>     <span class="s1">&#39;\\&#39;</span><span class="p">,</span></div><div class='line' id='LC1115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\r&#39;</span><span class="o">:</span>     <span class="s1">&#39;r&#39;</span><span class="p">,</span></div><div class='line' id='LC1116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\n&#39;</span><span class="o">:</span>     <span class="s1">&#39;n&#39;</span><span class="p">,</span></div><div class='line' id='LC1117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\t&#39;</span><span class="o">:</span>     <span class="s1">&#39;t&#39;</span><span class="p">,</span></div><div class='line' id='LC1118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\u2028&#39;</span><span class="o">:</span> <span class="s1">&#39;u2028&#39;</span><span class="p">,</span></div><div class='line' id='LC1119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\u2029&#39;</span><span class="o">:</span> <span class="s1">&#39;u2029&#39;</span></div><div class='line' id='LC1120'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1121'><br/></div><div class='line' id='LC1122'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">escaper</span> <span class="o">=</span> <span class="sr">/\\|&#39;|\r|\n|\t|\u2028|\u2029/g</span><span class="p">;</span></div><div class='line' id='LC1123'><br/></div><div class='line' id='LC1124'>&nbsp;&nbsp;<span class="c1">// JavaScript micro-templating, similar to John Resig&#39;s implementation.</span></div><div class='line' id='LC1125'>&nbsp;&nbsp;<span class="c1">// Underscore templating handles arbitrary delimiters, preserves whitespace,</span></div><div class='line' id='LC1126'>&nbsp;&nbsp;<span class="c1">// and correctly escapes quotes within interpolated code.</span></div><div class='line' id='LC1127'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">template</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">render</span><span class="p">;</span></div><div class='line' id='LC1129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">({},</span> <span class="nx">settings</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">templateSettings</span><span class="p">);</span></div><div class='line' id='LC1130'><br/></div><div class='line' id='LC1131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Combine delimiters into one regular expression via alternation.</span></div><div class='line' id='LC1132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">matcher</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">([</span></div><div class='line' id='LC1133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">escape</span> <span class="o">||</span> <span class="nx">noMatch</span><span class="p">).</span><span class="nx">source</span><span class="p">,</span></div><div class='line' id='LC1134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">interpolate</span> <span class="o">||</span> <span class="nx">noMatch</span><span class="p">).</span><span class="nx">source</span><span class="p">,</span></div><div class='line' id='LC1135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">evaluate</span> <span class="o">||</span> <span class="nx">noMatch</span><span class="p">).</span><span class="nx">source</span></div><div class='line' id='LC1136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;|&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;|$&#39;</span><span class="p">,</span> <span class="s1">&#39;g&#39;</span><span class="p">);</span></div><div class='line' id='LC1137'><br/></div><div class='line' id='LC1138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Compile the template source, escaping string literals appropriately.</span></div><div class='line' id='LC1139'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1140'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">source</span> <span class="o">=</span> <span class="s2">&quot;__p+=&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC1141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">matcher</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="nx">escape</span><span class="p">,</span> <span class="nx">interpolate</span><span class="p">,</span> <span class="nx">evaluate</span><span class="p">,</span> <span class="nx">offset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">+=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">offset</span><span class="p">)</span></div><div class='line' id='LC1143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">escaper</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="s1">&#39;\\&#39;</span> <span class="o">+</span> <span class="nx">escapes</span><span class="p">[</span><span class="nx">match</span><span class="p">];</span> <span class="p">});</span></div><div class='line' id='LC1144'><br/></div><div class='line' id='LC1145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">escape</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">+=</span> <span class="s2">&quot;&#39;+\n((__t=(&quot;</span> <span class="o">+</span> <span class="nx">escape</span> <span class="o">+</span> <span class="s2">&quot;))==null?&#39;&#39;:_.escape(__t))+\n&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC1147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">interpolate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">+=</span> <span class="s2">&quot;&#39;+\n((__t=(&quot;</span> <span class="o">+</span> <span class="nx">interpolate</span> <span class="o">+</span> <span class="s2">&quot;))==null?&#39;&#39;:__t)+\n&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC1150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">evaluate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">+=</span> <span class="s2">&quot;&#39;;\n&quot;</span> <span class="o">+</span> <span class="nx">evaluate</span> <span class="o">+</span> <span class="s2">&quot;\n__p+=&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC1153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span> <span class="o">=</span> <span class="nx">offset</span> <span class="o">+</span> <span class="nx">match</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">match</span><span class="p">;</span></div><div class='line' id='LC1156'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">+=</span> <span class="s2">&quot;&#39;;\n&quot;</span><span class="p">;</span></div><div class='line' id='LC1158'><br/></div><div class='line' id='LC1159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If a variable is not specified, place data values in local scope.</span></div><div class='line' id='LC1160'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">settings</span><span class="p">.</span><span class="nx">variable</span><span class="p">)</span> <span class="nx">source</span> <span class="o">=</span> <span class="s1">&#39;with(obj||{}){\n&#39;</span> <span class="o">+</span> <span class="nx">source</span> <span class="o">+</span> <span class="s1">&#39;}\n&#39;</span><span class="p">;</span></div><div class='line' id='LC1161'><br/></div><div class='line' id='LC1162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">=</span> <span class="s2">&quot;var __t,__p=&#39;&#39;,__j=Array.prototype.join,&quot;</span> <span class="o">+</span></div><div class='line' id='LC1163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;print=function(){__p+=__j.call(arguments,&#39;&#39;);};\n&quot;</span> <span class="o">+</span></div><div class='line' id='LC1164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">+</span> <span class="s2">&quot;return __p;\n&quot;</span><span class="p">;</span></div><div class='line' id='LC1165'><br/></div><div class='line' id='LC1166'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">render</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Function</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">variable</span> <span class="o">||</span> <span class="s1">&#39;obj&#39;</span><span class="p">,</span> <span class="s1">&#39;_&#39;</span><span class="p">,</span> <span class="nx">source</span><span class="p">);</span></div><div class='line' id='LC1168'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">source</span> <span class="o">=</span> <span class="nx">source</span><span class="p">;</span></div><div class='line' id='LC1170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">e</span><span class="p">;</span></div><div class='line' id='LC1171'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1172'><br/></div><div class='line' id='LC1173'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="k">return</span> <span class="nx">render</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">_</span><span class="p">);</span></div><div class='line' id='LC1174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">template</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">render</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">_</span><span class="p">);</span></div><div class='line' id='LC1176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1177'><br/></div><div class='line' id='LC1178'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Provide the compiled function source as a convenience for precompilation.</span></div><div class='line' id='LC1179'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">template</span><span class="p">.</span><span class="nx">source</span> <span class="o">=</span> <span class="s1">&#39;function(&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">variable</span> <span class="o">||</span> <span class="s1">&#39;obj&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;){\n&#39;</span> <span class="o">+</span> <span class="nx">source</span> <span class="o">+</span> <span class="s1">&#39;}&#39;</span><span class="p">;</span></div><div class='line' id='LC1180'><br/></div><div class='line' id='LC1181'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">template</span><span class="p">;</span></div><div class='line' id='LC1182'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1183'><br/></div><div class='line' id='LC1184'>&nbsp;&nbsp;<span class="c1">// Add a &quot;chain&quot; function, which will delegate to the wrapper.</span></div><div class='line' id='LC1185'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">chain</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">chain</span><span class="p">();</span></div><div class='line' id='LC1187'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1188'><br/></div><div class='line' id='LC1189'>&nbsp;&nbsp;<span class="c1">// OOP</span></div><div class='line' id='LC1190'>&nbsp;&nbsp;<span class="c1">// ---------------</span></div><div class='line' id='LC1191'>&nbsp;&nbsp;<span class="c1">// If Underscore is called as a function, it returns a wrapped object that</span></div><div class='line' id='LC1192'>&nbsp;&nbsp;<span class="c1">// can be used OO-style. This wrapper holds altered versions of all the</span></div><div class='line' id='LC1193'>&nbsp;&nbsp;<span class="c1">// underscore functions. Wrapped objects may be chained.</span></div><div class='line' id='LC1194'><br/></div><div class='line' id='LC1195'>&nbsp;&nbsp;<span class="c1">// Helper function to continue chaining intermediate results.</span></div><div class='line' id='LC1196'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_chain</span> <span class="o">?</span> <span class="nx">_</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">chain</span><span class="p">()</span> <span class="o">:</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC1198'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1199'><br/></div><div class='line' id='LC1200'>&nbsp;&nbsp;<span class="c1">// Add all of the Underscore functions to the wrapper object.</span></div><div class='line' id='LC1201'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">_</span><span class="p">);</span></div><div class='line' id='LC1202'><br/></div><div class='line' id='LC1203'>&nbsp;&nbsp;<span class="c1">// Add all mutator Array functions to the wrapper.</span></div><div class='line' id='LC1204'>&nbsp;&nbsp;<span class="nx">each</span><span class="p">([</span><span class="s1">&#39;pop&#39;</span><span class="p">,</span> <span class="s1">&#39;push&#39;</span><span class="p">,</span> <span class="s1">&#39;reverse&#39;</span><span class="p">,</span> <span class="s1">&#39;shift&#39;</span><span class="p">,</span> <span class="s1">&#39;sort&#39;</span><span class="p">,</span> <span class="s1">&#39;splice&#39;</span><span class="p">,</span> <span class="s1">&#39;unshift&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC1206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">;</span></div><div class='line' id='LC1208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;shift&#39;</span> <span class="o">||</span> <span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;splice&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="k">delete</span> <span class="nx">obj</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC1210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC1211'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1212'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1213'><br/></div><div class='line' id='LC1214'>&nbsp;&nbsp;<span class="c1">// Add all accessor Array functions to the wrapper.</span></div><div class='line' id='LC1215'>&nbsp;&nbsp;<span class="nx">each</span><span class="p">([</span><span class="s1">&#39;concat&#39;</span><span class="p">,</span> <span class="s1">&#39;join&#39;</span><span class="p">,</span> <span class="s1">&#39;slice&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1216'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC1217'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">method</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">));</span></div><div class='line' id='LC1219'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1220'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1221'><br/></div><div class='line' id='LC1222'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC1223'><br/></div><div class='line' id='LC1224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Start chaining a wrapped Underscore object.</span></div><div class='line' id='LC1225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chain</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_chain</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1228'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1229'><br/></div><div class='line' id='LC1230'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Extracts the result from a wrapped and chained object.</span></div><div class='line' id='LC1231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">;</span></div><div class='line' id='LC1233'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1234'><br/></div><div class='line' id='LC1235'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1236'><br/></div><div class='line' id='LC1237'><span class="p">}).</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1360648847" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.07863s from fe4.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/documentcloud/underscore/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.07929' data-host='fe4'></span>
    
  </body>
</html>

