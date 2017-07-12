---
title: Campus Maps
description: Gatsby Starter Kit
keywords: gatsby, starter
---

# Introduction

This case study details the process of the Microsoft Campus Maps
redesign by the Team. This project began as a bottom up, user centered
approach to thinking about how could improve it’s Campus Maps service
and continue to provide maps of the Microsoft campus to Microsoft
employees.

The case study begins by providing background into the various Microsoft
campuses and the numerous mapping applications that can be used to
navigate the campus. Section \[defining\] explains the discovery process
used to develop an understanding of the core problems that users face
navigating the Microsoft campus. Section \[solution\] details the
proposed solutions for the defined scenario.

# Background

This section discusses mapping solutions currently used by employees at
Microsoft as well as the layout of the Microsoft main campus in Redmond,
Washington.

## Microsoft Campuses

Microsoft has campuses and buildings all around the world. The
headquarters and main campus for Microsoft is in Redmond, Washington —
near Seattle — shown in figure \[fig:msMainCampus\]. In addition to main
campus the are several satellite offices also in the Puget Sound area.
These offices are typically organized in to four areas,

Redmond:   which has the Redmond West, Redmond Town Centre and Millennium
    offices.

Bellevue

:   which has the Lincoln Square, Bravern, City Centre and Civica
    offices in downtown Bellevue and the Advanta offices in south
    Bellevue.

Seattle

:   which has the Westlake office in Seattle’s technology district —
    South Lake Union.

Issaquah

:   which has the Sammamish office.

![Microsoft Main Campus in Redmond,
Washington[]{data-label="fig:msMainCampus"}](Resources/Microsoft-World-Map){width="\textwidth"}

Something to note is that although Microsoft Main Campus is in the
municipality of Redmond it is not considered to be in downtown Redmond
like the other Redmond offices. The locations of all the offices can be
see in figure \[fig:pugetSoundMap\] which depicts Puget Sound area.

## Mapping Applications

Microsoft employees have a number of applications available to them for
finding their way around campus. This includes Maps (or Campus Maps) —
provided through the Microsoft internal employee portal — as well as
consumer mapping apps like Bing, Google and Apple Maps.

###  Maps {#mswMaps}

Maps, also known as Campus Maps is an internal Microsoft mapping
application managed by the team. It allows Microsoft employees to look
up the locations of buildings as well as services — like cafeterias or
bike lockers — on the Microsoft campus.

![ Maps[]{data-label="fig:mswMaps"}](Resources/MSW){width="\textwidth"}

### Consumer Mapping Apps {#consumerMaps}

Many employees also use consumer mapping applications, including

Google Maps

:   On and Android devices as well as on the web. This is probably the
    most popular.

Bing Maps

:   On Windows phone devices as well as on the web. This is mainly used
    by Windows phone users.

Apple Maps

:   On devices. This is mainly used by iPhone users.

Google Maps is the probably most common choice. It the locations of the
majority of Microsoft buildings and provides walking, biking, driving
and public transit directions.

![Google
Maps[]{data-label="fig:googleMaps"}](Resources/Google-Maps){width="40.00000%"}

Unlike Maps the consumer mapping services do not provide information
about building services and instead only has the locations of buildings.

# Defining the Problems {#defining}

We chose to take a bottom-up, user driven approach to the campus maps
rethink. Before jumping into a redesign of Maps we wanted to know what
the challenges were for current and new employees that maps could help
solve.

We began with user research via informal interviews then consolidated
that data with empathy mapping. From there we extracted observations and
then goals using those to form the basis of our scenarios.

## Interviews

Our research began by conducting eight interviews. Employees interviewed
included veteran and junior employees as well as interns. Employees were
asked questions about how they get around campus — point A to point B —
and how they find services on campus, like cafeterias.

Interviews were recorded and later transcribed. A list of the interview
questions can be found in appendix \[appx:questions\].

## Empathy Mapping {#empathy}

We used empathy mapping to help consolidate and organize the information
from the interviews. Specifically we used a user experience focused
flavour of empathy mapping which centered around tasks, feelings and
influences as well as challenges and goals [@ux-empathy-map].

## Observations

We noted a number of observations about how employees navigated campus.

### Head versus World Navigators

In *The Psychology of Everyday Things* Don Norman talks about the
concept of knowledge in the head versus knowledge in the world. An
example of knowledge in the head would be a memorized password whereas
an example of knowledge in the world would be that password written down
in a book [@everyday_things].

One difference between employees was how they managed navigational
knowledge. Some employees would opt to follow signage — either indoor or
outdoor — or use navigation on their phones whereas others would tend to
memorize where buildings were. Many fell somewhere in-between looking up
directions on their phone or computer before leaving then following
signs while in transit.

### Walkers versus Drivers

It was no huge surprise but employees had varying thresholds for when
they would walk versus when they would drive or take a shuttle. For some
interviewees anything less than a 30 minute walk was acceptable but for
others 10 minutes was the maximum distance they would consider walking.

### Building Groupings

One thing interviewees were in agreement on was that building groupings
on campus were misleading. For example, buildings 83 through 88 are
grouped together, in the north campus; however building 92, despite
being in a similar numeric range, is in west campus. Similarly buildings
1 through 10 are all grouped together with the exception that there is
no building 7 (a common prank to play on new interns was to post that
there was free food in building 7).

### Best route

A common request from employees was a system for knowing the fastest
method of travel between buildings or campuses. Google Maps provides a
comparison for walking, biking, driving or transit however misses a
couple of key features specific to Microsoft campus.

Foremost, it does not have estimates for the Microsoft internal shuttle
system which is an option considered by many employees getting between
buildings. Additionally it does not account for parking availability for
driving between Microsoft buildings which can be a significant time sink
when driving.

### Discovery of Services

Almost all interviewees noted that not only were they not sure what
services were available near their buildings, they also didn’t know
where they would go to find that information. Most where unaware that
Maps had that information available, although some had been sent a list
of services by the team or receptionist.

### Internal Navigation

Many employees expressed interest in the possibility of internal
navigation on campus. Specifically expressing concerns about finding
offices or meeting rooms within buildings. Additionally often the
fastest walking route on campus involves cutting through buildings and
unless you know the inside of the building you may walk around it.

### Finding Parking

Especially for more senior employees a large time sink was finding
parking on campus. They often wanted to know whether or not they would
be able to find parking if they drove across campus to a meeting.

### Socialization

Many interviewees noted a preference for personal interaction. For
example one interviewee preferred to book a shuttle through the
receptionist rather than online. Interviewees also often chose to ask
someone in a building about the nearby services rather than look it up
online.

## Goals

From the observations, empathy map and interviews we extracted three
goals for most employees using campus maps. In order of importance,

Go somewhere

:   Navigate from point A to point B.

Find something

:   Figure out where a building or service is located.

Learn for next time

:   Learn the route, location or service for next time.

Often all of these goals were present in a given scenario. For example
an employees might want to get to a meeting. They need to first find out
where it is, then get there, then remember for next time. Learning is
often a subconscious goal where we remember either specifically or
generally places we have been to before.

## Scenarios

From here we focused down to two scenarios that we could design
solutions for within the scope of the internship.

Getting a shuttle across campus

:   An employee wants to take a shuttle from building 18 to building 92.

Finding your building after orientation

:   A new employee has to find and get to their building after
    orientation.

In this report we’ll focus on the second scenario, a new employee
finding their building. During the internship several other projects
were found in Microsoft trying to solve issues around shuttle
transportation — the first scenario. The team is continuing to move
forward with those teams to discover how campus maps can integrate with
the new solutions that the other teams are working on.

# Helping new employees navigate {#solution}

We set out to figure out how we could help new employees navigate.
Specifically on their first day but also going forward into the first
few weeks of work.

## Specific challenges

A number of challenges exist specifically for new employees compared to
existing Microsoft employees.

No sense of campus

:   Unlike existing employees, new employees typically have no sense
    whatsoever of how the Microsoft campus is laid out. For example they
    don’t know the difference between North, West and East campuses
    (e.g. why no south campus?).

Can’t authenticate

:   New employees rarely have credentials at orientation; they typically
    receive them from their team once they get to their building. This
    means they can’t use any authenticated web services including . It
    can sometimes take up to several weeks to get credentials set up.

Need to learn

:   New employees need to learn where their building is so they can get
    to work in the mornings. Typically new employees also want to get a
    general sense of campus and the surrounding Puget Sound area.

## A solution

Rather than creating a web service which new employees wouldn’t be able
to access, we decided to create a physical map that could be distributed
at new employee orientation. The map could provide information about
campus as well as the surrounding Puget Sound area.

## Developing the map

The map was iterated on and tested over the course of several weeks.
Microsoft campus takes up an “L” shape so the top right corner was used
to show an overview of puget sound as shown in figure
\[fig:brochure-back\].

[0.49]{} ![The Campus Map
brochure](Resources/Map-Front "fig:"){width="\textwidth"}

[0.49]{} ![The Campus Map
brochure](Resources/Map-Back "fig:"){width="\textwidth"}

The map was placed in a brochure with information about campus on the
outside, as shown in figure \[fig:brochure-front\]. A larger version of
the brochure can be found in appendix \[appx:brochure\].

### Main Campus Map

The Main Campus map was designed to provide an overview of the Microsoft
Main Campus. The map contains a number of features for helping new
employees quickly find things on campus.

![The Main Campus
Map[]{data-label="fig:mainCampusMap"}](Resources/Main-Campus-Map){width="75.00000%"}

First and foremost all Microsoft buildings are indicated in blue. The
outlines of Microsoft buildings are darkened give a feel for the
geographic layout of Microsoft campus. Parking, cafes, transit centres
and the health centre are indicated for new employees. Additionally Tech
Link locations are shown for new employees working on getting their
workstations set up and the security office is shown for new employees
having issues with their security badge. Several common points of
interest are marked including recruiting, the Garage, and the visitor’s
centre.

### Puget Sound Map

![The Puget Sound
Map[]{data-label="fig:pugetSoundMap"}](Resources/Puget-Sound-Map){width="80.00000%"}

The Puget Sound area map was design to give a feel for the Seattle
Metropolitan area and where Microsoft fits on a larger scale. The map
shows the locations of the main Microsoft offices with colours matched
to the brochure information panel. It also labels the major roadways,
municipalities, neighbourhoods and waterways. Additionally it shows the
location of the University of Washington and the Seattle-Tacoma
International Airport.

### Brochure Information

The outside of the brochure provides useful information for new
employees starting out at Microsoft. It contains a list of Microsoft
offices in the Puget Sound area, how to book shuttle or reserve for the
connector, and a list of useful contact numbers.

# Summary

In this project we set out to examine how can support Microsoft
employees on campus by providing maps and geographic information. We
conducted research to discover what problems current and new employees
were having navigating Microsoft campus. We discovered issues for new
employees learning the layout of campus and designed a map to help them
doing their first few weeks.

# References

# Campus Map {#appx:brochure}

## Outside of brochure

![image](Resources/Campus-Map-Brochure){width="\textwidth"}

## Inside of brochure

![image](Resources/Campus-Map-Brochure){width="\textwidth"}

# Interview Questions {#appx:questions}

## Introduction {#introduction .unnumbered}

-   Project: Campus Maps Rethink

-   About 15 to 20 mins

-   All questions are optional

-   Audio recording is optional

## Demographic Information {#demographic-information .unnumbered}

-   What’s your name?

-   What’s your alias?

-   How long have you worked at Microsoft?

-   What’s your role at Microsoft?

-   How long have you worked in Redmond? How did you come to work here?

## Transportation Preferences {#transportation-preferences .unnumbered}

-   How do you normally get to work?

-   If you have a meeting in another building how do you get there? Walk
    me through it.

-   Tell me about a time (the last time?) when you had to get to another
    building, what was your process?

## Service Preferences {#service-preferences .unnumbered}

-   Do you normally bring lunch to work or buy lunch on campus?

-   How do you find a place to eat?

-   Do you ever look for facility services on campus?

## Conclusion {#conclusion .unnumbered}

-   Is there anything else that comes to mind?

-   If there was one thing that would improve your experience getting
    around campus what would it be?


