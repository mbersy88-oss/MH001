\# Barsi OS Backup Protocol



Version: 1.0



\## Purpose



Protect Barsi OS from data loss, accidental changes, and unclear project state.



\## Backup Layers



\### Layer 1 — Git Version Control



All development changes must follow:



1\. Create change

2\. Test

3\. Commit

4\. Push

5\. Record version



\### Layer 2 — Manual Backup



Required before major milestones:



\- Architecture changes

\- New systems

\- Database changes

\- Major refactoring



Backup includes:



\- Repository copy

\- Current status report

\- Screenshots

\- Important notes



\### Layer 3 — Project State Documentation



Maintain:



\- PROJECT\_STATE.md

\- CHANGELOG.md

\- Architecture decisions



\## Rule



No major development starts without a recovery point.



\## Recovery Principle



If something fails:



1\. Identify last stable version

2\. Restore backup

3\. Review changes

4\. Continue from verified state

