import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';



export default function Bottom() {
    return (
        <footer style={{ color: 'rgb(235, 213, 213)' }}>
            <ul style={{ listStyleType: 'none', listStyle: 'none', listStylePosition: 'initial' ,
            marginTop:'2.4rem',
            marginBottom:'2.4rem',
            display:'flex',
            alignContent:'center'
        }}>
                <li style={{textAlign:'match-parent',marginRight:'16px' }} ><a href="https://www.facebook.com/ondemandchina" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon alt="link to odc facebook" /></a></li>
                <li style={{textAlign:'match-parent',marginRight:'16px' }} >
                    <a href='https://www.youtube.com/c/OnDemandChinaOfficial ' target="_blank" >
                        <YouTubeIcon></YouTubeIcon>
                    </a>
                </li>
                <li style={{textAlign:'match-parent',marginRight:'16px' }} ><a href="https://www.weibo.com/ondemandchina" target='_blank'>
                    <img src='https://ondemandchina.com/icons/ico-weibo.svg' />
                </a>
                </li>
            </ul>
            <ul style={{
                listStyleType: 'none', listStyle: 'none', listStylePosition: 'initial',
                marginBlockStart: '1em',
                marginBlockEnd: '1em',
                paddingInlineStart: '40px',
                
            }} >
                <li>博客</li>
                <li>
                    关于我们
                </li>
                <li>联系我们</li>
                <li>常见问题</li>

            </ul>
            <div>© 2020-2022 ODK Media, Inc.</div>
            <div>OnDemandChina &amp; Design Reg. U.S. Pat. &amp; Tm. Off.</div>
        </footer>
    );
}