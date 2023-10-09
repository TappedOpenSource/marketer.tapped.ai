import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    marginBottom: 10,
  },
  listItem: {
    marginBottom: 5,
  },
});

const PDFDocument = ({ content }) => {
  const tokens = md.parse(content, {});
  return (
    <Document>
      <Page style={styles.page}>
        {tokens.map((token, index) => {
          if (token.type === 'heading_open') {
            if (token.tag === 'h1') {
              return <Text key={index} style={styles.header}>{tokens[index + 1].content}</Text>;
            }
            if (token.tag === 'h2') {
              return <Text key={index} style={styles.subheader}>{tokens[index + 1].content}</Text>;
            }
          }
          if (token.type === 'paragraph_open') {
            return <Text key={index} style={styles.text}>{tokens[index + 1].content}</Text>;
          }
          return null;
        })}
      </Page>
    </Document>
  );
};

export default PDFDocument;
